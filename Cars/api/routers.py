from rest_framework.routers import DefaultRouter
from .api import ViewCars
router = DefaultRouter()

router.register(r'', ViewCars)

urlpatterns = router.urls
