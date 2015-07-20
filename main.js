// ----------------------   REFERENCE:   --------------------------------
// Blood Type  Donate Blood To     Receive Blood From
// O-          All Types           O-
// O+          O+ A+ B+ AB+        O+ O-
// A-          A+ A- AB+ AB-       A- O-
// A+          A+ AB+              A+ A- O+ O-
// B-          B+ B- AB+ AB-       B- O-
// B+          B+ AB+  B+ B-       O+ O-
// AB-         AB+ AB-             AB- A- B- O-
// AB+         AB+                 Everyone

// Blood type  % of population    preferred donation method:
// O-            6.9              Whole
// O+           39.8              Whole
// A-            5.6              Whole
// A+           31.5              Platelets or Plasma
// B-            1.6              Whole
// B+           10.6              Platelets or Plasma
// AB-           0.6              Plasma
// AB+           3.5              Plasma


// Blood type  % pop type can Donate Blood To:     % Receive Blood From
// O-          100.0                                
// O+           85.0                                
// A-           46.1                                
// A+           39.2                                
// B-           14.0                                
// B+           11.9                                   
// AB-           4.0                                
// AB+           3.4                         
// ----------------------   END REFERENCE:   --------------------------------


$(document).on('ready', function() {

// @bloodTypePercent data object holds properties for each blood type in fields of letter/percent pairs:
// @typeLetter = O-, A-, B-, AB-, O+, A+, B+, AB+
// @percentOfPop = percentage of population with that type,


// @recipientTypes = set of types compatible with this type (for receiving it),
// @recipientPercent = cumulative percent of population of compatible recipient type,

// Methods:
// enter donor information and constructor instantiates new "person" object:
// when push button to submit, display "what's there to know about being blood type X"- 
// dynamically creates sentence about your type as percent of pop, 
// the % of pop that can receive your type, the preferred donation method for your type,
// a canvas bar graph (graphjs) of how your type compares to population & other types
//
// select a blood type and create a graphjs bargraph percentage of people of that type
// 
// select a person and on button click, list names of people compatible to donate to and receive from.
// when an event happens in text game or canvas game, make updates 
// randomly assign event that creates need (person assigned need becomes a recipient)

// to do:
// Create Donor information record
// Create Donation record

// example: var shoesData = [{name:"Nike", price:199.00 }
// ​var typeLetter = ["O-," "A-", "B-", "AB-", "O+", "A+", "B+", "AB+"];

var bloodTypePercent = [{typeLetter:"O-", popPercent: 6.9 }, {typeLetter:"A-", popPercent: 5.6 },
                        {typeLetter:"B-", popPercent: 1.6 }, {typeLetter:"AB-", popPercent: 0.6 },
                        {typeLetter:"O+", popPercent: 39.8 }, {typeLetter:"A+", popPercent: 31.5 },
                        {typeLetter:"B+", popPercent: 10.6 }, {typeLetter:"AB+", popPercent: 3.5 }
                        ];

var compatibleTypeSets = [{typeLetter: "O-", recipientTypes: "O-"}, {typeLetter: "O-", recipientTypes: "O+"},
                        {typeLetter: "O-", recipientTypes: "A-"}, {typeLetter: "O-", recipientTypes: "A+"},
                        {typeLetter: "O-", recipientTypes: "B-"}, {typeLetter: "O-", recipientTypes: "B+"},
                        {typeLetter: "O-", recipientTypes: "AB-"}, {typeLetter: "O-", recipientTypes: "AB+"},

                        {typeLetter: "O+", recipientTypes: "O+"},
                        {typeLetter: "O+", recipientTypes: "A+"},
                        {typeLetter: "O+", recipientTypes: "B+"},
                        {typeLetter: "O+", recipientTypes: "AB+"},

                        {typeLetter: "A-", recipientTypes: "A-"}, {typeLetter: "A-", recipientTypes: "A+"},
                        {typeLetter: "A-", recipientTypes: "AB-"}, {typeLetter: "O-", recipientTypes: "AB+"},

                        {typeLetter: "A+", recipientTypes: "A+"},
                        {typeLetter: "A+", recipientTypes: "AB+"},

                        {typeLetter: "B-", recipientTypes: "B-"}, {typeLetter: "B-", recipientTypes: "B+"},
                        {typeLetter: "B-", recipientTypes: "AB-"}, {typeLetter: "B-", recipientTypes: "AB+"},

                        {typeLetter: "B+", recipientTypes: "B+"},
                        {typeLetter: "B+", recipientTypes: "AB+"},

                        {typeLetter: "AB-", recipientTypes: "AB-"}, {typeLetter: "AB-", recipientTypes: "AB+"},

                        {typeLetter: "AB+", recipientTypes: "AB+"}
                        ];

​var percentCanReceiveType = [{typeLetter:"O-", popPercent: 100 }, {typeLetter:" A-", popPercent: 46.1 },
                            {typeLetter:"B-", popPercent: 14 }, {typeLetter:" AB-", popPercent: 4 },
                            {typeLetter:"O+", popPercent: 85 }, {typeLetter:"A+", popPercent: 39.2 },
                            {typeLetter:"B+", popPercent: 11.9 }, {typeLetter:" AB+", popPercent: 3.4 }
                            ];


var preferredDonationType = [{typeLetter:"O-", donationType:"Whole" }, {typeLetter:" A-", donationType:"Whole"  },
                            {typeLetter:"B-", popPercent: 14 }, {typeLetter:" AB-", popPercent: 4 },
                            {typeLetter:"O+", donationType:"Whole" }, {typeLetter:"A+", popPercent: 39.2 },
                            {typeLetter:"B+", popPercent: 11.9 }, {typeLetter:" AB+", popPercent: 3.4 }
                            ];





// variable & array initialization
	var donorCount = 0;
	var donationCount = 0;
	var donors = [];
	// var donations = [];

// // class constructors for Donors and Donations
	var Donor = function(firstName, lastName, age, bloodType) {
		this.firstName 	= firstName;
		this.lastName 	= lastName;
		this.age		= age;
		this.bloodType	= bloodType;
	};

	// var Donations = function(firstName, lastName, donationDate, ) {
	// 		this.firstName 	= firstName;
	// 		this.lastName 	= lastName;
	// 		this.donation	= donationDate;
	// 		this.			= ;
	// };
//prototype methods to create HTML and text elements
});
