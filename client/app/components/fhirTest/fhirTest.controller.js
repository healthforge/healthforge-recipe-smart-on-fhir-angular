class FhirTestController {
	constructor($scope) {
		this.name = 'fhirTest';
		this.$scope = $scope;
		this.$scope.fhirResult = {
			text : 'Loading...'
		};
	}

	loadData() {
		var demo = {
			serviceUrl: "https://fhir-open-api-dstu2.smarthealthit.org",
			patientId: "1137192"
		};

		var smart = FHIR.client(demo);
		var vm = this;

		smart.api.search({
			type: "Observation", query: {subject: "99912345"}
		}).then(function(r){
			console.log(JSON.stringify(r,null,2));
			vm.updateValue(JSON.stringify(r,null,2));
			});
	}

	updateValue(val) {
		this.$scope.fhirResult.text = val;
		this.$scope.$apply();
	}
}

FhirTestController.$inject = ['$scope'];

export default FhirTestController;
