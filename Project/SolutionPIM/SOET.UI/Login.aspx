<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="SOET.UI.Login" Theme="Padrao" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

<%@ Register src="Control/CustomMessageBox.ascx" tagname="CustomMessageBox" tagprefix="uc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.1.1.min.js"></script>

    <script src="App_Script/Geral.js" type="text/javascript"></script>
    <link href="App_Style/login.css" rel="stylesheet" type="text/css" />
    <title>SOET - Sistema Otimizador de Empresas de Transporte</title>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <div>
        <label>Login</label> <asp:TextBox runat="server" id="txtLogin" MaxLength="20" CssClass="textbox-medio" /> 
        <asp:RequiredFieldValidator ID="RequiredFieldValidator199" ControlToValidate="txtLogin" runat="server" SetFocusOnError="true" />
        <br />
        

        <label>Senha</label> <asp:TextBox runat="server" id="txtSenha" MaxLength="20" CssClass="textbox-medio" TextMode="Password" /> 
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" ControlToValidate="txtSenha" runat="server" />
        <br />

        <a href="#" id="aSenha" runat="server">Esqueci minha senha</a>
        <br />

        <asp:Button runat="server" ID="btnLogin" CssClass="botao-medio" Text="Login"/>


    </div>

        <cc1:ModalPopupExtender ID="popUpSenha" runat="server" TargetControlID="aSenha"
            PopupControlID="panelSenha" BackgroundCssClass="modalBackground" BehaviorID="modalBehavior"
            OkControlID="closePopUp" />

        <cc1:AnimationExtender ID="animationPopUp" runat="server" TargetControlID="aSenha">
            <Animations>
            <OnClick>
            <Sequence>
                <ScriptAction Script="$find('modalBehavior').show()"/>
                <FadeIn AnimationTarget="panelSenha" Duration=".5" Fps="20" /> 
            </Sequence>
            </OnClick>
            </Animations>
        </cc1:AnimationExtender>

        <asp:Panel ID="panelSenha" runat="server" ScrollBars="None" Style="display: none" Width="90%" Height="95%">
        <asp:UpdatePanel ID="UpdatePanel2" runat="server">
        <ContentTemplate>
            <div class="container-popup" style="width: 100%; height: 97%;">
                <table class="header-popup" style="width:100%">
                    <tr style="padding-left:5px" >
                        <td style="float:left;">
                            Esqueci minha senha
                        </td>
                        <td style="float:right; text-align:right;">
                            <asp:Image ImageUrl="~/App_Image/ico_delete.png" runat="server" ID="closePopUp" />
                        </td>
                    </tr>
                </table>
                <div class="body-popup">

                </div>
            </div>
            </ContentTemplate>
                </asp:UpdatePanel>
        </asp:Panel>
        <uc1:CustomMessageBox ID="CustomMessageBox1" runat="server" />
    </form>
</body>
</html>
