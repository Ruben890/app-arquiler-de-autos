from rest_framework.routers import DefaultRouter
from .api import ViewCars, ViewBranch, ViewGuy, ViewYear
router = DefaultRouter()

router.register(r'car', ViewCars)
router.register(r'year_cars', ViewYear, basename="year_cars")
router.register(r'Guy_cars', ViewGuy, basename="Guy_cars")
router.register(r'branch_cars', ViewBranch, basename="branch_cars")
urlpatterns = router.urls
