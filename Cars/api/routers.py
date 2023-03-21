from rest_framework.routers import DefaultRouter
from .api import ViewCars, ViewBranch, ViewGuy, ViewYear, Payments
router = DefaultRouter()

router.register(r'car', ViewCars)
router.register(r'year_cars', ViewYear, basename="year_cars")
router.register(r'guy_cars', ViewGuy, basename="guy_cars")
router.register(r'branch_cars', ViewBranch, basename="branch_cars")
router.register(r'payments/(?P<pk>\d+)/', Payments, basename="payment")
urlpatterns = router.urls
