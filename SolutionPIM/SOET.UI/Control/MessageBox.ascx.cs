using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SOET.UI.Control
{
    public partial class MessageBoxControl : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.ShowMessage("Teste", "Teste");
        }

        public void ShowMessage(String Title, String Text)
        {
            string javascript;

            javascript = "javascript: messagebox('" + Text + "','" + Title + "', 'Close'); ";

            Page.ClientScript.RegisterStartupScript(GetType(), "Javascript", javascript, true);
        }
    }
}