# In myapp/admin.py

from copy import deepcopy
from django.contrib import admin
from mezzanine.blog.admin import BlogPostAdmin
from mezzanine.blog.models import BlogPost
from mezzanine.pages.admin import PageAdmin
from mezzanine.pages.models import RichTextPage
from mezzanine.forms.admin import FormAdmin
from mezzanine.forms.models import Form

blog_fieldsets = deepcopy(BlogPostAdmin.fieldsets)
blog_fieldsets[0][1]["fields"].insert(-2, "retina")
#blog_fieldsets[0][1]["fields"].insert(-3, "disableFeaturedImage")
pages_fieldsets = deepcopy(PageAdmin.fieldsets)
form_fieldsets = deepcopy(FormAdmin.fieldsets)
pages_fieldsets[0][1]["fields"].insert(-2, "hero_image")
pages_fieldsets[0][1]["fields"].insert(-3, "hero_title")
pages_fieldsets[0][1]["fields"].insert(-4, "hero_subtitle")
#blog_fieldsets[0][1]["fields"].insert(-3, "disableFeaturedImage")
form_fieldsets[0][1]["fields"].insert(-2, "hero_image")
form_fieldsets[0][1]["fields"].insert(-3, "hero_title")
form_fieldsets[0][1]["fields"].insert(-4, "hero_subtitle")

class MyBlogPostAdmin(BlogPostAdmin):
    fieldsets = blog_fieldsets



class CustomPageAdmin(PageAdmin):
    fieldsets = pages_fieldsets

class CustomFormAdmin(FormAdmin):
    fieldsets = form_fieldsets    

admin.site.unregister(BlogPost)
admin.site.register(BlogPost, MyBlogPostAdmin)
admin.site.unregister(RichTextPage)
admin.site.register(RichTextPage, CustomPageAdmin)
admin.site.unregister(Form)
admin.site.register(Form, CustomFormAdmin)