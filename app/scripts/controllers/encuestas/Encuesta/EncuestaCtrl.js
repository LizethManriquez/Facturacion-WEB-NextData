'use strict';
angular
  .module('softvApp')
  .controller('EncuestaCtrl', function ($uibModal, $rootScope, ngNotify, encuestasFactory) {

    function initialData() {
      encuestasFactory.GetEncuestasList().then(function (data) {
        vm.Encuestas = data.GetEncuestasListResult;


      });
    }

    function Imprime(id) {
      
      var options = id;
      vm.animationsEnabled = true;
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/encuestas/ModalImprimeEncuesta.html',
        controller: 'ModalImprimeEncuestaCtrl',
        controllerAs: 'ctrl',
        backdrop: 'static',
        keyboard: false,
        size: 'lg',
        resolve: {
          options: function () {
            return options;
          }
        }
      });
    }

    var vm = this;
    initialData();
    vm.Imprime=Imprime;
  });
