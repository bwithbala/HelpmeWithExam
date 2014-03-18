sap.ui.jsview("view.RWFractions", {

    getControllerName: function() {
        return "view.RWFractions";
    },

    createContent: function(oController) {

/*        var oListTemplate = new sap.m.ObjectListItem({
            title: "{name}",
            icon: "sap-icon://goal",
            intro: "{description}",
            number: "{calories}",
            numberUnit: "Calories"
            	
        });

        
        var oList = new sap.m.List({});
        oList.bindAggregation("items", "/Coffee", oListTemplate);*/
        

		// Create items
/*		var oItem1 = new sap.m.Image({
			src: "images/mark1.png",
			alt: "test image",
			decorative: false,
			densityAware: false,
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});*/
		
		var oLabelFraction = new sap.m.Label({
			text: "Choose 5 fractions which matches the given Fraction. ",
			design: "Bold",
			layoutData: new sap.m.FlexItemData({growFactor: 1})
		});		

		var oLabelQuestion1 = new sap.m.Label({
			text: "1/4",
			design: "Bold",
			layoutData: new sap.m.FlexItemData({growFactor: 2})
		});				
		
		var oLabelChoice = new sap.m.Label({
			text: "Choose from Below",
			design: "Bold",
			layoutData: new sap.m.FlexItemData({growFactor: 3})
		});		
		
		
/*       var oCheckboxTemplate = new sap.m.Checkbox({
        selected: "{selected}",
        visible: "{visible}",
        text: "{text}",
        enabled: "{enabled}"
	
    });		*/
       
       //oCheckboxTemplate.bindAggregation("items", "/RWChoices", oCheckboxTemplate);*/
       
       
       
		var cbOption1 = new sap.m.CheckBox({
			selected:"{/selected}", visible: "{/visible}", text: "{/text}",  enabled: "{/enabled}"}
		    layoutData: new sap.m.FlexItemData({growFactor: 2})
	});
		);
	/*	var cbOption2 = new sap.m.CheckBox({selected:true, visible: true, text: "2/4 * 2/2 = 2/8", enabled: true});
		var cbOption3 = new sap.m.CheckBox({selected:true, visible: true, text: "3/4 * 3/3 = 2/8", enabled: true});
		
		var cbOption4 = new sap.m.CheckBox({selected:true, visible: true, text: "1/4 * 3/3 = 3/12", enabled: true});
		var cbOption5 = new sap.m.CheckBox({selected:true, visible: true, text: "1/4 * 4/4 = 4/16", enabled: true});
		var cbOption6 = new sap.m.CheckBox({selected:true, visible: true, text: "3/4 * 3/3 = 2/8", enabled: true});		*/
		
		
		
/*		var oItem2 = new sap.m.Image({
			src: "images/mark2.png",
			alt: "test image",
			decorative: false,
			densityAware: false,
			layoutData: new sap.m.FlexItemData({growFactor: 2})
		});

		var oItem3 = new sap.m.Image({
			src: "images/mark3.png",
			alt: "test image",
			decorative: false,
			densityAware: false,
			layoutData: new sap.m.FlexItemData({growFactor: 3})
		});
*/
		// Create a vertical flexbox with items
		var oVBox1 = new sap.m.VBox("vbox1", {
			items:[
				oLabelFraction,
				cbOption1
				
			]
		});    	
    	
		       


        return new sap.m.Page({
            title: "Read Write Fractions",
            content: [oVBox1],
            headerContent: [],
            footer: new sap.m.Bar({})
        });
    }

});