from django.db import models

class Projects(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technology = models.CharField(max_length=200)
    image = models.ImageField(upload_to='project_images/')
    link = models.URLField()
    
    def __str__(self):
        return self.title
from django.db.models.signals import post_delete
from django.dispatch import receiver

@receiver(post_delete, sender=Projects)
def delete_image_on_record_delete(sender, instance, **kwargs):
    if instance.image:
        instance.image.delete(False)

    
