from django.views.generic import TemplateView


class HomePage(TemplateView):
    template_name = 'website/pages/home_page.html'


class AboutPage(TemplateView):
    template_name = 'website/pages/about_page.html'

    def get_context_data(self, **kwargs):
        return super(AboutPage, self).get_context_data(**kwargs)
