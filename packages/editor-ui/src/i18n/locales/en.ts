export default {
	nodeCreator: {
		categoryNames: {
			coreNodes: 'Core Nodes',
			customNodes: 'Custom Nodes',
			suggestedNodes: 'Suggested Nodes ✨',
			analytics: 'Analytics',
			communication: 'Communication',
			dataStorage: 'Data & Storage',
			development: 'Development',
			financeAccounting: 'Finance & Accounting',
			marketingContent: 'Marketing & Content',
			productivity: 'Productivity',
			sales: 'Sales',
			utility: 'Utility',
			miscellaneous: 'Miscellaneous',
		},
		subcategoryNames: {
			dataTransformation: 'Data Transformation',
			flow: 'Flow',
			files: 'Files',
			helpers: 'Helpers',
		},
		subcategoryDescriptions: {
			manipulate: 'Manipulate data fields, run code',
			branches: 'Branches, core triggers, merge data',
			work: 'Work with CSV, XML, text, images etc.',
			http: 'HTTP Requests (API calls), date and time, scrape HTML',
		},
		mainPanel: {
			all: 'All',
			regular: 'Regular',
			trigger: 'Trigger',
		},
		searchBar: {
			searchNodes: 'Search nodes...',
		},
		noResults: {
			weDidntMakeThatYet: "We didn't make that... yet",
			dontWorryYouCanProbablyDoItWithThe: 'Don’t worry, you can probably do it with the {httpRequest} or {webhook} node',
			httpRequest: 'HTTP Request',
			webhook: 'Webhook',
			node: 'node',
			wantUsToMakeItFaster: 'Want us to make it faster?',
			requestTheNode: 'Request the node',
		},
	},
	textEdit: {
		edit: 'Edit',
	},
	codeEdit: {
		edit: 'Edit',
	},
	versionCard: {
		thisVersionHasASecurityIssue: 'This version has a security issue.<br/>It is listed here for completeness.',
		released: 'Released',
		securityUpdate: 'Security update',
		breakingChanges: 'Breaking changes',
		version: 'Version',
		unknown: 'unknown',
	},
	updatesPanel: {
		weVeBeenBusy: 'We’ve been busy ✨',
		youReOnVersion: 'You’re on {currentVersionName}, which was released',
		andIs: 'and is',
		version: '{numberOfVersions} version{howManySuffix}',
		behindTheLatest: 'behind the latest and greatest n8n',
		howToUpdateYourN8nVersion: 'How to update your n8n version',
	},
	timeAgo: {
		justNow: 'Just now',
		rightNow: 'Right now',
		oneMinuteAgo: '1 minute ago',
		oneHourAgo: '1 hour ago',
		oneDayAgo: '1 day ago',
		oneWeekAgo: '1 week ago',
		oneMonthAgo: '1 month ago',
		oneYearAgo: '1 year ago',
		minutesAgo: '%s minutes ago',
		hoursAgo: '%s hours ago',
		daysAgo: '%s days ago',
		weeksAgo: '%s weeks ago',
		monthsAgo: '%s months ago',
		yearsAgo: '%s years ago',
		inOneMinute: 'in 1 minute',
		inOneHour: 'in 1 hour',
		inOneDay: 'in 1 day',
		inOneWeek: 'in 1 week',
		inOneMonth: 'in 1 month',
		inOneYear: 'in 1 year',
		inMinutes: 'in %s minutes',
		inHours: 'in %s hours',
		inDays: 'in %s days',
		inWeeks: 'in %s weeks',
		inMonths: 'in %s months',
		inYears: 'in %s years',
	},
	about: {
		aboutN8n: 'About n8n',
		apacheWithCommons20Clause: 'Apache 2.0 with Commons Clause',
		close: 'Close',
		license: 'License',
		n8nVersion: 'n8n Version',
		sourceCode: 'Source Code',
	},
	binaryDataDisplay: {
		backToList: 'Back to list',
		backToOverviewPage: 'Back to overview page',
		noDataFoundToDisplay: 'No data found to display',
		yourBrowserDoesNotSupport: 'Your browser does not support the video element. Kindly update it to latest version.',
	},
	collectionParameter: {
		choose: 'Choose...',
		noProperties: 'No properties',
	},
	credentialsList: {
		name: 'Name',
		type: 'Type',
		credentials: 'Credentials',
		addNew: 'Add New',
		confirmMessage: {
			cancelButtonText: '',
			confirmButtonText: 'Yes, delete!',
			headline: 'Delete Credential?',
			message: 'Are you sure you want to delete {credentialName} credential?',
		},
		createNewCredential: 'Create New Credential',
		editCredential: 'Edit Credential',
		deleteCredential: 'Delete Credential',
		showError: {
			deleteCredential: {
				message: '',
				title: 'Problem deleting credential',
			},
		},
		showMessage: {
			message: 'The credential {credentialName} got deleted!',
			title: 'Credential deleted',
		},
		yourSavedCredentials: 'Your saved credentials',
		created: 'Created',
		updated: 'Updated',
		operations: 'Operations',
	},
	credentialSelectModal: {
		searchForApp: 'Search for app...',
		addNewCredential: 'Add new credential',
		selectAnAppOrServiceToConnectTo: 'Select an app or service to connect to',
		continue: 'Continue',
	},
	dataDisplay: {
		needHelp: 'Need help?',
		nodeDocumentation: 'Node Documentation',
		openDocumentationFor: 'Open {nodeTypeDisplayName} documentation',
	},
	displayWithChange: {
		clickToChange: 'Click to Change',
		cancelEdit: 'Cancel Edit',
		setValue: 'Set Value',
	},
	duplicateWorkflowDialog: {
		cancel: 'Cancel',
		chooseOrCreateATag: 'Choose or create a tag',
		duplicateWorkflow: 'Duplicate Workflow',
		enterWorkflowName: 'Enter workflow name',
		save: 'Save',
		showMessage: {
			message: 'Please enter a name.',
			title: 'Name missing',
		},
	},
	executionDetails: {
		executionId: 'Execution ID',
		executionWasSuccessful: 'Execution was successful',
		executionWaiting: 'Execution waiting',
		executionFailed: 'Execution failed',
		openWorkflow: 'Open Workflow',
	},
	credentialEdit: {
		credentialInfo: {
			allowUseBy: 'Allow use by',
			created: 'Created',
			lastModified: 'Last modified',
			id: 'ID',
		},
		credentialConfig: {
			needHelpFillingOutTheseFields: 'Need help filling out these fields?',
			openDocs: 'Open docs',
			pleaseCheckTheErrorsBelow: 'Please check the errors below',
			couldntConnectWithTheseSettings: "Couldn’t connect with these settings",
			retry: 'Retry',
			retrying: 'Retrying',
			retryCredentialTest: 'Retry credential test',
			accountConnected: 'Account connected',
			reconnect: 'reconnect',
			reconnectOAuth2Credential: 'Reconnect OAuth2 Credential',
			connectionTestedSuccessfully: 'Connection tested successfully',
			oAuthRedirectUrl: 'OAuth Redirect URL',
			clickToCopy: 'Click To Copy',
			subtitle: 'In {appName}, use the URL above when prompted to enter an OAuth callback or redirect URL',
			redirectUrlCopiedToClipboard: 'Redirect URL copied to clipboard',
			theServiceYouReConnectingTo: "the service you're connecting to",
		},
		oAuthButton: {
			signInWithGoogle: 'Sign in with Google',
			connectMyAccount: 'Connect my account',
		},
		credentialEdit: {
			connection: 'Connection',
			details: 'Details',
			confirmMessage: {
				beforeClose1: {
					cancelButtonText: 'Keep Editing',
					confirmButtonText: 'Close',
					headline: 'Close without saving?',
					message: 'Are you sure you want to throw away the changes you made to the {credentialDisplayName} credential?',
				},
				beforeClose2: {
					cancelButtonText: 'Keep Editing',
					confirmButtonText: 'Close',
					headline: 'Close without connecting?',
					message: 'You need to connect your credential for it to work',
				},
				deleteCredential: {
					cancelButtonText: '',
					confirmButtonText: 'Yes, delete!',
					headline: 'Delete Credential?',
					message: 'Are you sure you want to delete "{savedCredentialName}" credential?',
				},
			},
			couldNotFindCredentialOfType: 'Could not find credential of type',
			couldNotFindCredentialWithId: 'Could not find credential with ID',
			showMessage: {
				title: 'Credential deleted',
				message: 'The credential {savedCredentialName} was deleted!',
			},
			showError: {
				loadCredential: {
					message: '',
					title: 'Problem loading credential',
				},
				createCredential: {
					message: '',
					title: 'Problem creating credential',
				},
				updateCredential: {
					message: '',
					title: 'Problem updating credential',
				},
				deleteCredential: {
					message: '',
					title: 'Problem deleting credential',
				},
				generateAuthorizationUrl: {
					message: 'There was a problem generating the authorization URL',
					title: 'OAuth Authorization Error',
				},
			},
		},
	},
	readOnly: {
		youreViewingTheLogOf: `You're viewing the log of a previous execution. You cannot<br />
		make changes since this execution already occured. Make changes<br />
		to this workflow by clicking on its name on the left.`,
		readOnly: 'Read only',
	},
	executionsList: {
		modes: {
			error: 'error',
			retry: 'retry',
			manual: 'manual',
			trigger: 'trigger',
		},
		stopExecution: 'Stop Execution',
		unsavedWorkflow: '[UNSAVED WORKFLOW]',
		allWorkflows: 'All Workflows',
		anyStatus: 'Any Status',
		autoRefresh: 'Auto refresh',
		confirmMessage: {
			cancelButtonText: '',
			confirmButtonText: 'Yes, delete!',
			headline: 'Delete Executions?',
			message: 'Are you sure that you want to delete the {numSelected} selected executions?',
		},
		error: 'Error',
		filters: 'Filters',
		loadMore: 'Load More',
		mode: 'Mode',
		name: 'Name',
		openPastExecution: 'Open Past Execution',
		retryExecution: 'Retry execution',
		retryOf: 'Retry of',
		retryWithCurrentlySavedWorkflow: 'Retry with currently saved workflow',
		retryWithOriginalworkflow: 'Retry with original workflow',
		running: 'Running',
		runningTime: 'Running Time',
		waiting: 'Waiting',
		selected: 'Selected',
		deleteSelected: 'Delete Selected',
		selectStatus: 'Select Status',
		selectWorkflow: 'Select Workflow',
		showError: {
			handleDeleteSelected: {
				message: '',
				title: 'Problem deleting executions',
			},
			loadMore: {
				message: '',
				title: 'Problem loading workflows',
			},
			loadWorkflows: {
				message: '',
				title: 'Problem loading workflows',
			},
			refreshData: {
				message: '',
				title: 'Problem loading data',
			},
			retryExecution: {
				message: '',
				title: 'Problem with retry',
			},
			stopExecution: {
				message: '',
				title: 'Problem stopping execution',
			},
		},
		showMessage: {
			handleDeleteSelected: {
				message: 'The executions got deleted!',
				title: 'Execution deleted',
			},
			retrySuccessfulFalse: {
				message: 'The retry was not successful!',
				title: 'Retry unsuccessful',
			},
			retrySuccessfulTrue: {
				message: '',
				title: 'Retry successful',
			},
			stopExecution: {
				message: 'The execution with the ID {activeExecutionId} got stopped!',
				title: 'Execution stopped',
			},
		},
		startedAtId: 'Started At / ID',
		status: 'Status',
		statusTooltipText: {
			theWorkflowIsWaitingIndefinitely: 'The workflow is waiting indefinitely for an incoming webhook call.',
			theWorkflowIsWaitingTill: `The worklow is waiting till {waitDateDate} {waitDateTime}.`,
			theWorkflowExecutionFailed: 'The workflow execution failed.',
			theWorkflowExecutionFailedButTheRetryWasSuccessful: 'The workflow execution failed but the retry {entryRetrySuccessId} was successful.',
			theWorkflowExecutionIsProbablyStillRunning: 'The workflow execution is probably still running but it may have crashed and n8n cannot safely tell. ',
			theWorkflowExecutionWasARetryOfAndFailed: 'The workflow execution was a retry of {entryRetryOf} and failed.<br />New retries have to be,started from the original execution.',
			theWorkflowExecutionWasARetryOfAndItWasSuccessful: 'The workflow execution was a retry of {entryRetryOf} and it was successful.',
			theWorkflowExecutionWasSuccessful: 'The worklow execution was successful.',
			theWorkflowIsCurrentlyExecuting: 'The worklow is currently executing.',
		},
		success: 'Success',
		successRetry: 'Success retry',
		unknown: 'Unknown',
		workflowExecutions: 'Workflow Executions',
	},
	expressionEdit: {
		editExpression: 'Edit Expression',
		expression: 'Expression',
		result: 'Result',
		variableSelector: 'Variable Selector',
	},
	fixedCollectionParameter: {
		choose: 'Choose...',
		currentlyNoItemsExist: 'Currently no items exist',
	},
	genericHelpers: {
		showMessage: {
			message: 'The workflow cannot be edited as a past execution gets displayed. To make changed either open the original workflow of which the execution gets displayed or save it under a new name first.',
			title: 'Workflow cannot be changed!',
		},
		loading: 'Loading',
		sec: 'sec.',
	},
	mainSidebar: {
		aboutN8n: 'About n8n',
		confirmMessage: {
			workflowDelete: {
				cancelButtonText: '',
				confirmButtonText: 'Yes, delete!',
				headline: 'Delete Workflow?',
				message: 'Are you sure that you want to delete the workflow {workflowName}?',
			},
			workflowNew: {
				cancelButtonText: '',
				confirmButtonText: 'Yes, switch workflows and forget changes',
				headline: 'Save your Changes?',
				message: 'When you switch workflows your current workflow changes will be lost.',
			},
		},
		credentials: 'Credentials',
		delete: 'Delete',
		download: 'Download',
		duplicate: 'Duplicate',
		executions: 'Executions',
		help: 'Help',
		helpMenuItems: {
			documentation: 'Documentation',
			forum: 'Forum',
			workflows: 'Workflows',
		},
		importFromFile: 'Import from File',
		importFromUrl: 'Import from URL',
		new: 'New',
		open: 'Open',
		prompt: {
			cancel: 'Cancel',
			import: 'Import',
			importWorkflowFromUrl: 'Import Workflow from URL',
			invalidUrl: 'Invalid URL',
			workflowUrl: 'Workflow URL',
		},
		save: 'Save',
		settings: 'Settings',
		showError: {
			stopExecution: {
				message: '',
				title: 'Problem stopping execution',
			},
		},
		showMessage: {
			handleFileImport: {
				message: 'The file does not contain valid JSON data.',
				title: 'Could not import file',
			},
			handleSelect1: {
				message: 'The workflow {workflowName} got deleted.',
				title: 'Workflow got deleted',
			},
			handleSelect2: {
				message: '',
				title: 'Workflow created',
			},
			handleSelect3: {
				message: '',
				title: 'Workflow created',
			},
			stopExecution: {
				message: 'Execution with ID {executionId} got stopped!',
				title: 'Execution stopped',
			},
		},
		workflows: 'Workflows',
	},
	multipleParameter: {
		addItem: 'Add item',
		currentlyNoItemsExist: 'Currently no items exist',
		moveUp: 'Move up',
		moveDown: 'Move down',
		deleteItem: 'Delete item',
	},
	node: {
		theNodeIsWaitingIndefinitelyForAnIncomingWebhookCall: 'The node is waiting indefinitely for an incoming webhook call.',
		nodeIsWaitingTill: 'Node is waiting till {date} {time}',
		disabled: 'Disabled',
		nodeIsExecuting: 'Node is executing',
		deleteNode: 'Delete Node',
		activateDeactivateNode: 'Activate/Deactivate Node',
		duplicateNode: 'Duplicate Node',
		editNode: 'Edit Node',
		executeNode: 'Execute Node',
		issues: 'Issues',
	},
	nodeCredentials: {
		createNew: 'Create New',
		credentialFor: 'Credential for {credentialType}',
		selectCredential: 'Select Credential',
		issues: 'Issues',
		updateCredential: 'Update Credential',
		showMessage: {
			message: 'Nodes that used credential "{oldCredentialName}" have been updated to use "{newCredentialName}"',
			title: 'Node credential updated',
		},
	},
	nodeErrorView: {
		copyToClipboard: 'Copy to Clipboard',
		cause: 'Cause',
		dataBelowMayContain: 'Data below may contain sensitive information. Proceed with caution when sharing.',
		theErrorCauseIsTooLargeToBeDisplayed: 'The error cause is too large to be displayed.',
		details: 'Details',
		error: 'ERROR',
		httpCode: 'HTTP Code',
		showMessage: {
			message: '',
			title: 'Copied to clipboard',
		},
		stack: 'Stack',
		time: 'Time',
	},
	nodeSettings: {
		parameters: 'Parameters',
		settings: 'Settings',
		nodeDescription: 'Node Description',
		clickOnTheQuestionMarkIcon: 'Click the \'?\' icon to open this node on n8n.io',
		alwaysOutputData: {
			description: 'If active, the node will return an empty item even if the <br />node returns no data during an initial execution. Be careful setting <br />this on IF-Nodes as it could cause an infinite loop.',
			displayName: 'Always Output Data',
		},
		color: {
			description: 'The color of the node in the flow.',
			displayName: 'Node Color',
		},
		continueOnFail: {
			description: 'If active, the workflow continues even if this node\'s <br />execution fails. When this occurs, the node passes along input data from<br />previous nodes - so your workflow should account for unexpected output data.',
			displayName: 'Continue On Fail',
		},
		executeOnce: {
			description: 'If active, the node executes only once, with data<br /> from the first item it recieves.',
			displayName: 'Execute Once',
		},
		maxTries: {
			description: 'Number of times Retry On Fail should attempt to execute the node <br />before stopping and returning the execution as failed.',
			displayName: 'Max. Tries',
		},
		notes: {
			description: 'Optional note to save with the node.',
			displayName: 'Notes',
		},
		notesInFlow: {
			description: 'If active, the note above will display in the flow as a subtitle.',
			displayName: 'Display note in flow?',
		},
		retryOnFail: {
			description: 'If active, the node tries to execute a failed attempt <br /> multiple times until it succeeds.',
			displayName: 'Retry On Fail',
		},
		waitBetweenTries: {
			description: 'How long to wait between each attempt. Value in ms.',
			displayName: 'Wait Between Tries',
		},
		noDescriptionFound: 'No description found',
		theNodeIsNotValidAsItsTypeIsUnknown: 'The node is not valid as its type {nodeType} is unknown.',
		thisNodeDoesNotHaveAnyParameters: 'This node does not have any parameters.',
	},
	nodeView: {
		dropConnectionToAddNode: 'Drop connection<br />to add node',
		addNode: 'Add node',
		stopWaitingForWebhookCall: 'Stop waiting for Webhook call',
		deletesTheCurrentExecutionData: 'Deletes the current Execution Data.',
		resetZoom: 'Reset Zoom',
		zoomToFit: 'Zoom to Fit',
		zoomIn: 'Zoom In',
		zoomOut: 'Zoom Out',
		confirmMessage: {
			beforeRouteLeave: {
				cancelButtonText: '',
				confirmButtonText: 'Yes, switch workflows and forget changes',
				headline: 'Save your Changes?',
				message: 'When you switch workflows your current workflow changes will be lost.',
			},
			initView: {
				cancelButtonText: '',
				confirmButtonText: 'Yes, switch workflows and forget changes',
				headline: 'Save your Changes?',
				message: 'When you switch workflows your current workflow changes will be lost.',
			},
			receivedCopyPasteData: {
				cancelButtonText: '',
				confirmButtonText: 'Yes, import!',
				headline: 'Import Workflow from URL?',
				message: 'Import workflow from this URL:<br /><i>{plainTextData}<i>',
			},
		},
		thisExecutionHasntFinishedYet: "This execution hasn't finished yet",
		refresh: 'Refresh',
		toSeeTheLatestStatus: 'to see the latest status',
		moreInfo: 'More info',
		loadingTemplate: 'Loading template',
		couldntImportWorkflow: "Couldn't import workflow",
		workflowTemplateWithIdCouldNotBeFound: 'Workflow template with id "{templateId}" could not be found!',
		workflowWithIdCouldNotBeFound: 'Workflow with id "{workflowId}" could not be found!',
		executesTheWorkflowFromTheStartOrWebhookNode: 'Executes the Workflow from the Start or Webhook Node.',
		prompt: {
			cancel: 'Cancel',
			invalidName: 'Invalid Name',
			newName: 'New Name',
			rename: 'Rename',
			renameNode: 'Rename Node',
		},
		runButtonText: {
			executeWorkflow: 'Execute Workflow',
			executingWorkflow: 'Executing Workflow',
			waitingForWebhookCall: 'Waiting for Webhook-Call',
		},
		itLooksLikeYouHaveBeenEditingSomething: 'It looks like you have been editing something. If you leave before saving, your changes will be lost.',
		thereWasAProblemLoadingTheNodeParametersOfNode: 'There was a problem loading the node-parameters of node',
		noNodesGivenToAdd: 'No nodes given to add!',
		showError: {
			getWorkflowDataFromUrl: {
				message: 'There was a problem loading the workflow data from URL',
				title: 'Problem loading workflow',
			},
			importWorkflowData: {
				message: 'There was a problem importing workflow data',
				title: 'Problem importing workflow',
			},
			mounted1: {
				message: 'There was a problem loading init data',
				title: 'Init Problem',
			},
			mounted2: {
				message: 'There was a problem initializing the workflow',
				title: 'Init Problem',
			},
			openExecution: {
				message: '',
				title: 'Problem loading execution',
			},
			openWorkflow: {
				message: '',
				title: 'Problem opening workflow',
			},
			stopExecution: {
				message: '',
				title: 'Problem stopping execution',
			},
			stopWaitingForWebhook: {
				message: '',
				title: 'Problem deleting the test-webhook',
			},
		},
		showMessage: {
			addNodeButton: {
				message: 'Node of type {nodeTypeName} could not be created as it is not known.',
				title: 'Could not create node!',
			},
			keyDown: {
				message: '',
				title: 'Workflow created',
			},
			showMaxNodeTypeError: {
				message: {
					singular: 'Node cannot be created because in a workflow max. {maxNodes} node of type {nodeTypeDataDisplayName} is allowed!',
					plural: 'Node cannot be created because in a workflow max. {maxNodes} nodes of type {nodeTypeDataDisplayName} are allowed!',
				},
				title: 'Could not create node!',
			},
			stopExecutionCatch: {
				message: 'Unable to stop operation in time. Workflow finished executing already.',
				title: 'Workflow finished executing',
			},
			stopExecutionTry: {
				message: 'The execution with the id {executionId} got stopped!',
				title: 'Execution stopped',
			},
			stopWaitingForWebhook: {
				message: '',
				title: 'Webhook got deleted',
			},
		},
		stopCurrentExecution: 'Stop current execution',
		stoppingCurrentExecution: 'Stopping current execution',
	},
	nodeWebhooks: {
		testUrl: 'Test URL',
		productionUrl: 'Production URL',
		clickToDisplayWebhookUrls: 'Click to display Webhook URLs',
		clickToHideWebhookUrls: 'Click to hide Webhook URLs',
		clickToCopyWebhookUrls: 'Click to copy Webhook URLs',
		invalidExpression: '[INVALID EXPRESSION]',
		showMessage: {
			message: 'The webhook URL was successfully copied!',
			title: 'Copied',
		},
		webhookUrls: 'Webhook URLs',
	},
	noTagsView: {
		readyToOrganizeYourWorkflows: 'Ready to organize your workflows?',
		withWorkflowTagsYouReFree: 'With workflow tags, you\'re free to create the perfect tagging system for your flows',
	},
	parameterInput: {
		loadingOptions: 'Loading options...',
		addExpression: 'Add Expression',
		removeExpression: 'Remove Expression',
		refreshList: 'Refresh List',
		resetValue: 'Reset Value',
		selectDateAndTime: 'Select date and time',
		openEditWindow: 'Open Edit Window',
		issues: 'Issues',
		parameterOptions: 'Parameter Options',
		parameterHasIssuesAndExpression: 'Parameter: "{shortPath}" has issues and expression!',
		parameterHasIssues: 'Parameter: "{shortPath}" has issues!',
		parameterHasExpression: 'Parameter: "{shortPath}" has expression!',
		parameter: 'Parameter: "{shortPath}"',
		error: 'ERROR',
	},
	parameterInputExpanded: {
		thisFieldIsRequired: 'This field is required.',
		openDocs: 'Open docs',
	},
	parameterInputList: {
		delete: 'Delete',
		parameterOptions: 'Parameter Options',
		deleteParameter: 'Delete Parameter',
	},
	personalizationModal: {
		lookOutForThingsMarked: 'Look out for things marked with a ✨. They are personalized to make n8n more relevant to you.',
		getStarted: 'Get started',
		thanks: 'Thanks!',
		theseQuestionsHelpUs: 'These questions help us tailor n8n to you',
		whichOfTheseAreasDoYouMainlyWorkIn: 'Which of these areas do you mainly work in?',
		select: 'Select...',
		automationConsulting: 'Automation consulting',
		finance: 'finance',
		legal: 'legal',
		operations: 'operations',
		hr: 'HR',
		itEngineering: 'IT / Engineering',
		marketingGrowth: 'Marketing / Growth',
		product: 'Product',
		salesBusinessDevelopment: 'Sales / Business Development',
		security: 'Security',
		support: 'Support',
		otherPleaseSpecify: 'Other (please specify)',
		specifyYourWorkArea: 'Specify your work area',
		howAreYourCodingSkills: 'How are your coding skills',
		neverCoded: 'Never coded',
		proCoder: 'Pro coder',
		howBigIsYourCompany: 'How big is your company',
		lessThan20people: 'Less than 20 people',
		people: 'people',
		imNotUsingN8nForWork: "I'm not using n8n for work",
		continue: 'Continue',
		errorWhileSubmittingResults: 'Error while submitting results',
	},
	showMessage: {
		showDetails: 'Show Details',
		ok: 'OK',
		cancel: 'Cancel',
	},
	pushConnection: {
		showMessage: {
			message: '',
			title: 'Workflow executed successfully',
		},
	},
	pushConnectionTracker: {
		cannotConnectToServer: 'Cannot connect to server.<br />It is either down or you have a connection issue. <br />It should reconnect automatically once the issue is resolved.',
		connectionLost: 'Connection lost',
	},
	runData: {
		executesThisNodeAfterExecuting: 'Executes this {nodeName} node after executing any previous nodes that have not yet returned data',
		copyItemPath: 'Copy Item Path',
		copyParameterPath: 'Copy Parameter Path',
		copyToClipboard: 'Copy to Clipboard',
		copyValue: 'Copy Value',
		dataOfExecution: 'Data of Execution',
		dataReturnedByThisNodeWillDisplayHere: 'Data returned by this node will display here.',
		displayDataAnyway: 'Display Data Anyway',
		entriesExistButThey: 'Entries exist but they do not contain any JSON data.',
		json: 'JSON',
		table: 'Table',
		binary: 'Binary',
		executeNode: 'Execute Node',
		executionTime: 'Execution Time',
		fileExtension: 'File Extension',
		fileName: 'File Name',
		items: 'Items',
		mimeType: 'Mime Type',
		ms: 'ms',
		noBinaryDataFound: 'No binary data found',
		noData: 'No data',
		nodeReturnedALargeAmountOfData: 'Node returned a large amount of data',
		noTextDataFound: 'No text data found',
		output: 'Output',
		showBinaryData: 'Show Binary Data',
		startTime: 'Start Time',
		theNodeContains: 'The node contains {numberOfKb} KB of data.<br />Displaying it could cause problems!<br /><br />If you do decide to display it, avoid the JSON view!',
	},
	saveButton: {
		save: 'Save',
		saving: 'Saving',
		saved: 'Saved',
	},
	tagsDropdown: {
		createTag: 'Create tag "{filter}"',
		manageTags: 'Manage tags',
		noMatchingTagsExist: 'No matching tags exist',
		noTagsExist: 'No tags exist',
		showError: {
			message: 'A problem occurred when trying to create the {name} tag',
			title: 'New tag was not created',
		},
		typeToCreateATag: 'Type to create a tag',
	},
	tagsManager: {
		couldNotDeleteTag: 'Could not delete tag',
		done: 'Done',
		manageTags: 'Manage tags',
		tagNameCannotBeEmpty: 'Tag name cannot be empty',
		showError: {
			onCreate: {
				message: 'A problem occurred when trying to create the {escapedName} tag',
				title: 'New tag was not created',
			},
			onDelete: {
				message: 'A problem occurred when trying to delete the {escapedName} tag',
				title: 'Tag was not deleted',
			},
			onUpdate: {
				message: 'A problem occurred when trying to update the {escapedName} tag',
				title: 'Tag was not updated',
			},
		},
		showMessage: {
			onDelete: {
				message: 'A problem occurred when trying to delete the {escapedName} tag',
				title: 'Tag was deleted',
			},
			onUpdate: {
				message: 'The {escapedOldName} tag was successfully updated to {escapedName}',
				title: 'Tag was updated',
			},
		},
	},
	tagsTable: {
		noMatchingTagsExist: 'No matching tags exist',
		saveChanges: 'Save changes?',
		areYouSureYouWantToDeleteThisTag: 'Are you sure you want to delete this tag?',
		cancel: 'Cancel',
		createTag: 'Create tag',
		deleteTag: 'Delete tag',
		editTag: 'Edit Tag',
		name: 'Name',
		usage: 'Usage',
	},
	tagsTableHeader: {
		addNew: 'Add new',
		searchTags: 'Search Tags',
	},
	tagsView: {
		inUse: {
			singular: '{count} workflow',
			plural: '{count} workflows',
		},
		notBeingUsed: 'Not being used',
	},
	variableSelectorItem: {
		empty: '--- EMPTY ---',
		selectItem: 'Select Item',
	},
	workflowActivator: {
		activateWorkflow: 'Activate workflow',
		confirmMessage: {
			cancelButtonText: '',
			confirmButtonText: 'Yes, activate and save!',
			headline: 'Activate and save?',
			message: 'When you activate the workflow all currently unsaved changes of the workflow will be saved.',
		},
		deactivateWorkflow: 'Deactivate workflow',
		showError: {
			message: 'There was a problem and the workflow could not be {newStateName}',
			title: 'Problem',
		},
		showMessage: {
			activeChangedNodesIssuesExistTrue: {
				message: 'It is only possible to activate a workflow when all issues on all nodes got resolved!',
				title: 'Problem activating workflow',
			},
			activeChangedWorkflowIdUndefined: {
				message: 'The workflow did not get saved yet so cannot be set active!',
				title: 'Problem activating workflow',
			},
			displayActivationError: {
				message: {
					catchBlock: 'Sorry there was a problem requesting the error',
					errorDataNotUndefined: 'The following error occurred on workflow activation:<br /><i>{message}</i>',
					errorDataUndefined: 'Sorry there was a problem. No error got found to display.',
				},
				title: 'Problem activating workflow',
			},
		},
		theWorkflowIsSetToBeActiveBut: 'The workflow is set to be active but could not be started.<br />Click to display error message.',
	},
	workflowDetails: {
		active: 'Active',
		addTag: 'Add tag',
		showMessage: {
			message: 'Please enter a name, or press \'esc\' to go back to the old one.',
			title: 'Name missing',
		},
	},
	workflowHelpers: {
		showMessage: {
			message: '',
			title: 'Problem saving workflow',
		},
	},
	workflowOpen: {
		active: 'Active',
		confirmMessage: {
			cancelButtonText: '',
			confirmButtonText: 'Yes, switch workflows and forget changes',
			headline: 'Save your Changes?',
			message: 'When you switch workflows your current workflow changes will be lost.',
		},
		created: 'Created',
		name: 'Name',
		openWorkflow: 'Open Workflow',
		searchWorkflows: 'Search workflows...',
		showError: {
			message: 'There was a problem loading the workflows',
			title: 'Problem loading workflows',
		},
		showMessage: {
			message: 'This is the current workflow',
			title: 'Already open',
		},
		updated: 'Updated',
	},
	workflowRun: {
		noActiveConnectionToTheServer: 'No active connection to server. It is maybe down.',
		showError: {
			message: '',
			title: 'Problem running workflow',
		},
		showMessage: {
			message: 'The workflow has issues. Please fix them first',
			title: 'Workflow cannot be executed',
		},
	},
	workflowSettings: {
		settingsFor: 'Settings for {workflowName} (#{workflowId})',
		errorWorkflow: 'Error Workflow',
		helpTexts: {
			errorWorkflow: 'The workflow to run in case the current one fails.<br />To function correctly that workflow has to contain an \'Error Trigger\' node!',
			executionTimeout: 'After what time the workflow should timeout.',
			executionTimeoutToggle: 'Cancel workflow execution after defined time',
			saveDataErrorExecution: 'If data data of executions should be saved in case they failed.',
			saveDataSuccessExecution: 'If data data of executions should be saved in case they succeed.',
			saveExecutionProgress: 'If data should be saved after each node, allowing you to resume in case of errors from where it stopped. May increase latency.',
			saveManualExecutions: 'If data data of executions should be saved when started manually from the editor.',
			timezone: 'The timezone in which the workflow should run. Gets for example used by \'Cron\' node.',
		},
		defaultTimezoneNotValid: 'Default Timezone not valid',
		defaultTimezone: 'Default - {defaultTimezoneValue}',
		hours: 'hours',
		minutes: 'minutes',
		noWorkflow: '- No Workflow -',
		save: 'Save',
		saveDataErrorExecution: 'Save Data Error Execution',
		saveDataErrorExecutionOptions: {
			defaultSave: 'Default - ({defaultValue})',
			doNotSave: 'Do not save',
			save: 'Save',
		},
		saveDataSuccessExecution: 'Save Data Success Execution',
		saveDataSuccessExecutionOptions: {
			defaultSave: 'Default - ({defaultValue})',
			doNotSave: 'Do not save',
			save: 'Save',
		},
		saveExecutionProgress: 'Save Execution Progress',
		saveExecutionProgressOptions: {
			defaultSave: 'Default - ({defaultValue})',
			no: 'No',
			yes: 'Yes',
		},
		saveManualExecutions: 'Save Manual Executions',
		saveManualOptions: {
			defaultSave: 'Default - ({defaultValue})',
			no: 'No',
			yes: 'Yes',
		},
		seconds: 'seconds',
		selectOption: 'selectOption',
		showError: {
			saveSettings1: {
				errorMessage: 'Timeout is activated but set to 0',
				message: 'There was a problem saving the settings',
				title: 'Problem saving settings',
			},
			saveSettings2: {
				errorMessage: 'Maximum Timeout is: {hours} hours, {minutes} minutes, {seconds} seconds',
				message: 'Set timeout is exceeding the maximum timeout!',
				title: 'Problem saving settings',
			},
			saveSettings3: {
				message: 'There was a problem saving the settings',
				title: 'Problem saving settings',
			},
		},
		showMessage: {
			saveSettings: {
				message: 'The workflow settings got saved!',
				title: 'Settings saved',
			},
		},
		timeoutAfter: 'Timeout After',
		timeoutWorkflow: 'Timeout Workflow',
		timezone: 'Timezone',
	},
};