sap.ui.jsview("view.RWFractions", {

    getControllerName: function() {
        return "view.RWFractions";
    },

    createContent: function(oController) {

        var oListTemplate = new sap.m.ObjectListItem({
            title: "{name}",
            icon: "sap-icon://goal",
            intro: "{description}",
            number: "{calories}",
            numberUnit: "Calories"
        });

        var oList = new sap.m.List({});
        oList.bindAggregation("items", "/Coffee", oListTemplate);


        return new sap.m.Page({
            title: "Coffee Menu",
            content: [oList],
            headerContent: [],
            footer: new sap.m.Bar({})
        });
    }

});