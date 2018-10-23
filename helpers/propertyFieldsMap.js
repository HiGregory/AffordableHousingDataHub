module.exports.fieldsMap = {
    id: {
        dataType: 'int(11)',
        group: 'Basic Property Information',
        groupOrderNum: 1,
        editable: false,
        description: 'A unique ID of the property for record keeping.',
        active: true,
        name: 'Property ID'
    },
    property_name: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 2,
        editable: true,
        description: 'The name of the property. This would be the name of the apartment complex. If it is a single family home you can leave this blank.',
        active: true,
        name: 'Property Name'
    },
    address: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 3,
        editable: true,
        description: 'The street address of the property.',
        active: true,
        name: 'Street Address'
    },
    city: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 4,
        editable: true,
        description: 'The city the property is located in.',
        active: true,
        name: 'City'
    },
    state: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 5,
        editable: true,
        description: 'The state the property is located in.',
        active: true,
        name: 'State'
    },
    zipcode: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 6,
        editable: true,
        description: 'The zipcode the property is located in.',
        active: true,
        name: 'Zip Code'
    },
    lat: {
        dataType: 'float',
        group: null,
        editable: false,
        description: 'Latitude.',
        active: false,
        name: 'Latitude'
    },
    longitude: {
        dataType: 'float',
        group: null,
        editable: false,
        description: 'Longitude',
        active: false,
        name: 'Longitude'
    },
    unit_type: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 7,
        editable: true,
        description: 'Examples: multifamily, apartment, single-family home, etc.',
        active: true,
        name: 'Unit Type'
    },
    census_tract: {
        dataType: 'varchar(255)',
        group: null,
        editable: false,
        description: 'The census tract the property is in.',
        active: true,
        name: 'Census Tract'
    },
    owner: {
        dataType: 'varchar(255)',
        group: null,
        editable: false,
        description: 'The owner of the property.',
        active: true,
        name: 'Owner'
    },
    developer: {
        dataType: 'varchar(255)',
        group: null,
        editable: false,
        description: 'The developer of the property.',
        active: true,
        name: 'Developer'
    },
    council_district: {
        dataType: 'int(11)',
        group: 'Basic Property Information',
        groupOrderNum: 8,
        editable: true,
        description: 'The council district the property is in.',
        active: true,
        name: 'Council District'
    },
    phone: {
        dataType: 'varchar(255)',
        group: 'Contact Information',
        groupOrderNum: 1,
        editable: true,
        description: 'The phone number of landlord or leasing agent.',
        active: true,
        name: 'Phone'
    },
    email: {
        dataType: 'varchar(255)',
        group: 'Contact Information',
        groupOrderNum: 2,
        editable: true,
        description: 'The email of the landlord or leasing agent.',
        active: true,
        name: 'Email'
    },
    property_manager_or_landlord: {
        dataType: 'varchar(255)',
        group: 'Contact Information',
        groupOrderNum: 3,
        editable: true,
        description: 'The name of the property manager, landlord, or leasing agent.',
        active: true,
        name: 'Name of property manager or landlord'
    },
    website: {
        dataType: 'varchar(255)',
        group: 'Contact Information',
        groupOrderNum: 4,
        editable: true,
        description: 'The website of the property.',
        active: true,
        name: 'Website'
    },
    students_only: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 1,
        editable: true,
        description: 'Does this property only allow students?',
        active: true,
        name: 'Is this a student only property?'
    },
    community_elderly: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 2,
        editable: true,
        description: 'Does this property only allow elderly?',
        active: true,
        name: 'Does this property only serve the elderly?'
    },
    community_disabled: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 3,
        editable: true,
        description: 'Does this property only allow disabled persons?',
        active: true,
        name: 'Does this property only serve physically disabled persons?'
    },
    community_domestic_abuse_survivor: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 4,
        editable: true,
        description: 'Does this property only allow domestic abuse survivors?',
        active: true,
        name: 'Does this property only serve domestic abuse survivors?'
    },
    community_mental: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 5,
        editable: true,
        description: 'Does this property only allow persons with mental disabilities?',
        active: true,
        name: 'Does this property only serve mentally disabled persons?'
    },
    community_veteran: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 6,
        editable: true,
        description: 'Does this property only allow veterans?',
        active: true,
        name: 'Does this property only serve veterans?'
    },
    community_military: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 7,
        editable: true,
        description: 'Does this property only allow military persons?',
        active: true,
        name: 'Does this property only serve military?'
    },
    only_serves_designated_communities: {
        dataType: 'tinyint(1)',
        group: null,
        editable: false,
        active: false
    },
    community_served_descriptions: {
        dataType: 'varchar(255)',
        group: 'Communities Served',
        groupOrderNum: 8,
        editable: true,
        description: 'Any other information about the communities that this property serves.',
        active: true,
        name: 'Any other information about what communities this property serves?'
    },
    broken_lease: {
        dataType: 'enum(\'yes\',\'no\',\'depends\')',
        group: 'Communities Served',
        groupOrderNum: 9,
        editable: true,
        description: 'Does this property accept tenants with past broken leases?',
        active: true,
        name: 'Does this property accept applicants with a history of broken leases?'
    },
    broken_lease_criteria: {
        dataType: 'varchar(255)',
        group: 'Communities Served',
        groupOrderNum: 10,
        editable: true,
        description: 'Any other information about accepting tenants with broken leases.',
        active: true,
        name: 'What criteria is used to decide to accept an applicant with a broken lease?'
    },
    eviction_history: {
        dataType: 'enum(\'yes\',\'no\',\'depends\')',
        group: 'Communities Served',
        groupOrderNum: 11,
        editable: true,
        description: 'Does this property accept tenants with an eviction history?',
        active: true,
        name: 'Does this property accept applicants with an eviction history?'
    },
    eviction_history_criteria: {
        dataType: 'varchar(255)',
        group: 'Communities Served',
        groupOrderNum: 12,
        editable: true,
        description: 'Any other information about accepting tenants with eviction history.',
        active: true,
        name: 'What criteria is used to decide to accept an applicant with an eviction history?'
    },
    criminal_history: {
        dataType: 'enum(\'yes\',\'no\',\'depends\')',
        group: 'Communities Served',
        groupOrderNum: 13,
        editable: true,
        description: 'Does this property accept tenants with a criminal history?',
        active: true,
        name: 'Does this property accept applicants with a criminal history?'
    },
    criminal_history_criteria: {
        dataType: 'varchar(255)',
        group: 'Communities Served',
        groupOrderNum: 14,
        editable: true,
        description: 'Any other information about accepting tenants with criminal history.',
        active: true,
        name: 'What criteria is used to decide to accept an applicant with a criminal history?'
    },
    has_waitlist: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 15,
        editable: true,
        description: 'Does this property have a waitlist for affordable housing units?',
        active: true,
        name: 'Does this property have a waitlist for affordable housing units?'
    },
    total_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 1,
        editable: true,
        description: 'The total number of units the property has. Includes affordable units and market rate units.',
        active: true,
        name: 'Total Units'
    },
    total_psh_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 12,
        editable: true,
        description: 'The total number of permanent supportive housing units. Includes vacant or occupied units.',
        active: true,
        name: 'Total PSH Units'
    },
    has_allocated_psh_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 11,
        editable: true,
        description: 'Does this property have any permanent supportive housing units? Includes vacant and occupied units.',
        active: false
    },
    has_available_psh_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 13,
        editable: true,
        description: 'Does this property have any AVAILABLE permanent supportive housing units?',
        active: false
    },
    has_available_psh_units_updated: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null,
        active: false
    },
    total_income_restricted_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 3,
        editable: true,
        description: 'The total number of income restricted units. Includes vacant and occupied units.',
        active: true,
        name: 'Total Income Restricted Units'
    },
    has_allocated_ir_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 2,
        editable: true,
        description: 'Does this property have any income restricted units? Includes vacant and occupied units.',
        active: false
    },
    has_available_ir_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 4,
        editable: true,
        description: 'Does this property have any AVAILABLE income restricted units?',
        active: false
    },
    has_available_ir_units_updated_at: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null,
        active: false
    },
    total_section_8_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 6,
        editable: true,
        description: 'Total number of units that accept section 8 vouchers. This includes vacant and occupied units.',
        active: true,
        name: 'Total Section 8 Units'
    },
    accepts_section_8: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 5,
        editable: true,
        description: 'Does this property accept section 8 vouchers?',
        active: true,
        name: 'Does this property accept section 8 vouchers?'
    },
    has_available_section_8: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 7,
        editable: true,
        description: 'Does this property have any AVAILABLE units that would accept section 8 vouchers?',
        active: false
    },
    has_available_section_8_updated_at: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null,
        active: false
    },
    total_accessible_ir_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 9,
        editable: true,
        description: 'Total number of units that are accessible for physically disabled persons.',
        active: true,
        name: 'Total Units Wheelchair Accessible'
    },
    has_allocated_accessible_ir_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 8,
        editable: true,
        description: 'Does this property have any accessible units? Includes vacant and occupied units.',
        active: false
    },
    has_available_accessible_ir_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 10,
        editable: true,
        description: 'Does this property have any AVAILABLE accessible units for physically disabled persons?',
        active: false
    },
    has_available_accessible_ir_units_updated_at: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null,
        active: false
    },
    total_public_housing_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 15,
        editable: true,
        description: 'Total number of public housing units. Inlcudes vacant and occupied units.',
        active: true,
        name: 'Total Public Housing Units'
    },
    has_allocated_public_housing_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 14,
        editable: true,
        description: 'Does this property have any public housing units? Includes vacant and occupied units.',
        active: false
    },
    has_available_public_housing_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 16,
        editable: true,
        description: 'Does this property have any AVAILABLE public housing units?',
        active: false
    },
    has_available_public_housing_units_updated_at: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null,
        active: false
    },
    num_units_mfi_30: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 17,
        editable: true,
        description: '',
        active: true,
        name: 'Units <= 30% MFI'
    },
    num_units_mfi_40: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 18,
        editable: true,
        description: '',
        active: true,
        name: 'Units <= 40% MFI'
    },
    num_units_mfi_50: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 19,
        editable: true,
        description: '',
        active: true,
        name: 'Units <= 50% MFI'
    },
    num_units_mfi_60: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 20,
        editable: true,
        description: '',
        active: true,
        name: 'Units <= 60% MFI'
    },
    num_units_mfi_65: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 21,
        editable: true,
        description: '',
        active: true,
        name: 'Units <= 65% MFI'
    },
    // num_units_mfi_70: {
    //     dataType: 'int(11)'
    // },
    num_units_mfi_80: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 22,
        editable: true,
        description: '',
        active: true,
        name: 'Units <= 80% MFI'
    },
    // num_units_mfi_90: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_100: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_110: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_120: {
    //     dataType: 'int(11)'
    // },
    // has_0_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_1_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_2_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_3_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_4_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_5_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // num_ir_0_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_1_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_2_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_3_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_4_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_5_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_0_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_1_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_2_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_3_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_4_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_5_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    has_playground: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 11,
        editable: true,
        description: 'Does the property have a playground?',
        active: true,
        name: 'Does this property have a playground?'
    },
    has_pool: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 10,
        editable: true,
        description: 'Does the property have a pool?',
        active: true,
        name: 'Does this property have a pool?'
    },
    has_off_street_parking: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 9,
        editable: true,
        description: 'Does this property have off street parking? Like a gated parking lot or a garage.',
        active: true,
        name: 'Does this property have off street parking?'
    },
    has_air_conditioning: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 1,
        editable: true,
        description: 'Does this property have air conditioning?',
        active: true,
        name: 'Does this property have air conditioning?'
    },
    has_ceiling_fans: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 2,
        editable: true,
        description: 'Does this property have ceiling fans?',
        active: true,
        name: 'Does this property have ceiling fans?'
    },
    wd_unit: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 3,
        editable: true,
        description: 'Does this property have in unit washers and dryers?',
        active: true,
        name: 'Does this property have in-unit washer / dryers?'
    },
    wd_hookups: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 4,
        editable: true,
        description: 'Does this property have washer dryer hookups?',
        active: true,
        name: 'Does this property have in-unit washer / dryer hookups?'
    },
    wd_onsite: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 5,
        editable: true,
        description: 'Does this property have a laundromat on site?',
        active: true,
        name: 'Does this property have washer / dryer onsite or laundromat?'
    },
    wd_other: {
        dataType: 'varchar(255)',
        group: 'Amenities',
        groupOrderNum: 6,
        editable: true,
        description: 'Any other information associated with laundry',
        active: true,
        name: 'Any other information about washer / dryer?'
    },
    allows_pet: {
        dataType: 'enum(\'yes\',\'no\',\'service_only\')',
        group: 'Amenities',
        groupOrderNum: 7,
        editable: true,
        description: 'Does this property allow pets?',
        active: true,
        name: 'Does this property allow pets?'
    },
    pet_other: {
        dataType: 'varchar(255)',
        group: 'Amenities',
        groupOrderNum: 8,
        editable: true,
        description: 'Any other information about having pets.',
        active: true,
        name: 'Any other criteria used for pets?'
    },
    bus_transport_dist: {
        dataType: 'varchar(255)',
        group: null,
        editable: false,
        description: false,
        active: false
    },
    security: {
        dataType: 'varchar(255)',
        group: 'Amenities',
        groupOrderNum: 12,
        editable: true,
        description: 'What kind of provisions does this property have in terms of security? For example, does it have a security guard, or a gate?',
        active: true,
        name: 'Does this property have any extra provisions for security?'
    },
    elementary_school: {
        dataType: 'varchar(255)',
        group: 'Schools',
        groupOrderNum: 1,
        editable: true,
        description: 'Name of the elementary school.',
        active: true,
        name: 'What elementary school?'
    },
    middle_school: {
        dataType: 'varchar(255)',
        group: 'Schools',
        groupOrderNum: 2,
        editable: true,
        description: 'Name of the middle school.',
        active: true,
        name: 'What middle school?'
    },
    high_school: {
        dataType: 'varchar(255)',
        group: 'Schools',
        groupOrderNum: 3,
        editable: true,
        description: 'Name of the high school.',
        active: true,
        name: 'What high school?'
    },
    affordability_start: {
        dataType: 'datetime',
        group: null,
        active: false
    },
    affordability_expiration: {
        dataType: 'datetime',
        group: null,
        active: false
    },
    ahi_project_id: {
        dataType: 'int(11)',
        group: null,
        active: false
    },
    housing_program: {
        dataType: 'varchar(255)',
        group: null,
        active: false
    },
    CDBG: {
        dataType: 'float',
        group: null,
        active: false
    },
    HOME: {
        dataType: 'float',
        group: null,
        active: false
    },
    LIHTC: {
        dataType: 'varchar(255)',
        group: null,
        active: false
    },
    data_source_atc_guide: {
        dataType: 'tinyint(1)',
        group: null,
        active: false
    },
    data_source_tdhca: {
        dataType: 'tinyint(1)',
        group: null,
        active: false
    },
    data_source_ahi: {
        dataType: 'tinyint(1)',
        group: null,
        active: false
    },
    tcad_id: {
        dataType: 'int(11)',
        group: null,
        active: false
    }
}