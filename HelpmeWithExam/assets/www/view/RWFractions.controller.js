sap.ui.controller("view.RWFractions", {

    onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel("model/coffee.json"));
    }
    
});