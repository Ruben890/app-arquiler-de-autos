from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from .serializers import *
from ..models import *

import stripe


class ViewCars(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = CarSerializer.Meta().model.objects.all()


class ViewYear(viewsets.GenericViewSet):
    serializer_class = YearCarSerializer

    def list(self, request, *args, **kwargs):
        try:
            year_cars_queryset = year_cars.objects.all()
            serializer = YearCarSerializer(year_cars_queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ViewBranch(viewsets.GenericViewSet):
    serializer_class = BrandCarSerializer

    def list(self, request, *args, **kwargs):
        try:
            branch_cars_queryset = brand_cars.objects.all()
            serializers = BrandCarSerializer(branch_cars_queryset, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ViewGuy(viewsets.GenericViewSet):
    serializer_class = GuyCarSerializer

    def list(self, request, *args, **kwargs):
        try:
            guy_cars_queryset = guys_cars.objects.all()
            serializers = GuyCarSerializer(guy_cars_queryset, many=True)
            return Response(serializers.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"Error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class Payments(viewsets.GenericViewSet):
    def create(self, request, *args, **kwargs):
        car_id = kwargs['pk']
        # ? verifying cookie token
        token = request.COOKIES.get('create_auth_token')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:

            stripe.api_key = settings.STRIPE_SECRET_KEY
            cars = Cars.objects.get(id=car_id)
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price_data': {
                            'currency': 'usd',
                            'unit_amount': int(cars.price) * 100,
                            'product_data': {
                                'name': f'{cars.brand}:{cars.model}-{cars.year}',
                                'description': f'''
                                    Gearbox: {cars.Gearbox}
                                    Passenger Capacity: {cars.Passenger_Capacity}
                                    Maximum Baggage: {cars.Maximum_Baggage}''',
                                'images': [f'{settings.API_URL}/{cars.image_car.url}']
                            }

                        },
                        'quantity': 1,
                    }
                ],
                mode='payment',
                metadata={
                    'product_id': cars.id,
                },
                success_url=settings.SITE_URL + '?success=true',
                cancel_url=settings.SITE_URL + '?canceled=true',
            )
            return Response({"url": checkout_session.url}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"Error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
