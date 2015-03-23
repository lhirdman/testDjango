from django import template
from rango.models import Category

register = template.Library()

@register.inclusion_tag('rango/cats.html')
def get_category_list(max_results=0, starts_with=''):
    cats = []
    if starts_with:
        cats = Category.objects.filter(name__istartswith=starts_with)
    if max_results > 0:
        if len(cats) > max_results:
            cats = cats[:max_results]
    return cats
