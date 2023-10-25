sap.ui.define([
    "sap/ui/core/mvc/Controller",
    /*filtros*/
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    /*Modelos*/
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator, JSONModel) {
        "use strict";
        return Controller.extend("carrefour.controlpedidos.controller.Home", {
            onInit: function () {
                this.getView().setModel(new JSONModel({nombreProducto:""}),"modelFiltro");
            },
            onBuscarProducto: function(){
               var idTabla = this.getView().byId('table');
               var aFilters = [];
               var oFilters = [];
               var {nombreProducto} = this.getView().getModel("modelFiltro").getData();

               if (nombreProducto.length >0 ) {
                    oFilters.push(new Filter("ProductName", "Contains", nombreProducto));
                    aFilters.push(new Filter(oFilters, sap.ui.model.FilterOperator.Or));
               }
               idTabla.getBinding("rows").filter(aFilters);
            }
        });
    });
