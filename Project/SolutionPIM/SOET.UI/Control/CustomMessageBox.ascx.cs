using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SOET.UI.Control
{
    public partial class CustomMessageBox : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        public void ShowInfoMessage(String Text)
        {
            ShowMessage(MessageType.Info, Text);
        }

        public void ShowErrorMessage(String Text)
        {
            ShowMessage(MessageType.Error, Text);
        }


        protected void ShowMessage(MessageType Type, String Text)
        {
            string javascript = String.Empty;

            switch(Type)
            {
                case MessageType.Info:
                    javascript = "javascript: showMessage('info', '" + Text + "'); ";
                    break;
                case MessageType.Error:
                    javascript = "javascript: showMessage('error', '" + Text + "'); ";
                    break;
                case MessageType.Confirmation:
                    javascript = "javascript: showMessage('confirmation', '" + Text + "'); ";
                    break;
            }

            Page.ClientScript.RegisterStartupScript(GetType(), "Javascript", javascript, true);
        }

        public enum MessageType
        {
            [Description("Information")]
            Info = 1,
            [Description("Error")]
            Error = 2,
            [Description("Confirmation")]
            Confirmation = 3,
        }
    }
}