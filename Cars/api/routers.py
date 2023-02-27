from rest_framework.routers import DefaultRouter
from .api import ViewCars, ViewBranch, ViewGuy, ViewYear
router = DefaultRouter()

router.register(r'car', ViewCars)
router.register(r'year_cars', ViewYear)
router.register(r'Guy_cars', ViewGuy)
router.register(r'branch_cars', ViewBranch)
urlpatterns = router.urls
