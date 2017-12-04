using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Google;
using Owin;

namespace FlightPlans_webForms
{
    public partial class Startup {

        // Další informace o konfiguraci ověřování najdete na webu https://go.microsoft.com/fwlink/?LinkId=301883.
        public void ConfigureAuth(IAppBuilder app)
        {
            // Povolit aplikaci používat soubor cookie k uložení informací pro přihlášeného uživatele
            // a také uložení informací o přihlašování uživatele prostřednictvím zprostředkovatele přihlášení třetí strany.
            // Požadováno v případě, že vaše aplikace umožňuje uživatelům přihlásit se
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/Account/Login")
            });
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

            // Zrušením komentáře u tohoto řádku povolíte protokolování s využitím zprostředkovatelů přihlášení třetích stran
            //app.UseMicrosoftAccountAuthentication(
            //    clientId: "",
            //    clientSecret: "");

            //app.UseTwitterAuthentication(
            //   consumerKey: "",
            //   consumerSecret: "");

            //app.UseFacebookAuthentication(
            //   appId: "",
            //   appSecret: "");

            //app.UseGoogleAuthentication(new GoogleOAuth2AuthenticationOptions()
            //{
            //    ClientId = "",
            //    ClientSecret = ""
            //});
        }
    }
}
