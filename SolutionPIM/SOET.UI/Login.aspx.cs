using SOET.UI.Control;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

namespace SOET.UI
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            btnLogin.Click += new EventHandler(btnLogin_Click);
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            CustomMessageBox1.ShowInfoMessage("Info.");
            //CustomMessageBox1.ShowMessage("Error Message");
            //CustomMessageBox1.ShowMessage("Confirmation.");
        }
    }
}