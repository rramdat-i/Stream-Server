module.exports = {
	trains: [
		{ 
			id: "Train1",
			cameras: [
				{ name: "1", ip: "172.16.197.197" },
				{ name: "2", ip: "172.16.197.197" }
			]
		},
		{ 
			id: "Train2",
			cameras: [
				{ name: "3", ip: "172.16.197.197" }
			]
		},
		{ 
			id: "Train3",
			cameras: [
				{ name: "4", ip: "172.16.197.197" },
				{ name: "5", ip: "172.16.197.197" },
				{ name: "6", ip: "172.16.197.197" }
			]
		},
		{
			id: "Train4",
			cameras: [ ]
		}	
	],
	endpoints: {
		status: "/api/record",
		start: "/api/record/start",
		stop: "/api/record/stop",
		file: "/api/record/file/"
	},
	debug: true,
	deleteFromCamera: true,
	timeout: 5000,
	maxRetry: 5
};