using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FlightPlans_webForms.Startup))]
namespace FlightPlans_webForms
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
