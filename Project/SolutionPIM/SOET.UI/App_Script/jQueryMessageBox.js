$(function () {
    //all hover and click logic for buttons
    $(".fg-button:not(.ui-state-disabled)")
		.hover(
			function () {
			    $(this).addClass("ui-state-hover");
			},
			function () {
			    $(this).removeClass("ui-state-hover");
			}
		)
		.mousedown(function () {
		    $(this).parents('.fg-buttonset-single:first').find(".fg-button.ui-state-active").removeClass("ui-state-active");
		    if ($(this).is('.ui-state-active.fg-button-toggleable, .fg-buttonset-multi .ui-state-active')) { $(this).removeClass("ui-state-active"); }
		    else { $(this).addClass("ui-state-active"); }
		})
		.mouseup(function () {
		    if (!$(this).is('.fg-button-toggleable, .fg-buttonset-single .fg-button,  .fg-buttonset-multi .fg-button')) {
		        $(this).removeClass("ui-state-active");
		    }
		});
});



function showMessage(type, message, title) {
    $.blockUI.defaults = {
        themedCSS: {
            width: '30%',
            top: '35%',
            left: '35%'
        },
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.6,
            cursor: 'default'
        },
        // styles applied when using $.growlUI
	growlCSS: {
		width:  	'350px',
		top:		'10px',
		left:   	'',
		right:  	'10px',
		border: 	'none',
		padding:	'zpx',
		opacity:	0.6,
		cursor: 	'default',
		color:		'#fff',
		backgroundColor: '#000',
		
	},
	
    	baseZ: 1000,
    	centerX: true, // <-- only effects element blocking (page block controlled via css above)
    	centerY: true,
    	allowBodyStretch: true,
    	fadeIn:  200,
    	fadeOut:  400,
    	timeout: 0,
    	showOverlay: true,
    	applyPlatformOpacityRules: true,
    	onBlock: null,
    	onUnblock: null,	
    	quirksmodeOffsetHack: 4
        
    };

    var _message;
    var _title;

    switch(type.toString())
    {
        case "info":
            _message = '<div align="justify"><p>' + message + '</p> </div><input style="float:right" class="fg-button ui-state-default ui-corner-all" type="button" id="close" value="Close" />';
            _title = '<img src="../App_Script/jquery-theme/images/info.png" /> Information';
            break;
        case "error":
            _message = '<div align="justify"><p>' + message + '</p> </div><input style="float:right" class="fg-button ui-state-default ui-corner-all" type="button" id="close" value="Close" />';
            _title = '<img src="../App_Script/jquery-theme/images/error.png" /> Error';
            break;
        case "confirmation":
            _message = '<div align="justify"><p>' + message + '</p> </div><div style="float:right"><input class="fg-button ui-state-default ui-corner-all" type="button" id="confirm" value="Confirm" /><input class="fg-button ui-state-default ui-corner-all" type="button" id="close" value="Close" /></div>';
            _title = '<img src="../App_Script/jquery-theme/images/error.png" /> Confirmation';
            break;
    }

    $.blockUI({
        theme: true,
        title: _title,
        message: _message
    });

    $('#confirm').click(function () {
        $.unblockUI();
        return true;
    });

    $('#close').click(function () {
        $.unblockUI();
        return false;
    });
}

function showConfirmation(message)
{
    showMessage("confirmation", message, "Confirmation");
    return false;
}

function growlMessagebox(title,message) {
    $(document).ready(function () {
        $.growlUI(title.toString(), message.toString());
    });
}

    