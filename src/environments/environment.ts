// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    aws_project_region: 'ap-south-1',
    aws_cognito_identity_pool_id: 'ap-south-1:725755216375:userpool/ap-south-1_aLUZQ8lhn',
    aws_cognito_region: 'ap-south-1',
    aws_user_pools_id: 'ap-south-1_aLUZQ8lhn',
    aws_user_pools_web_client_id: 'bi1peivapgipj7opiiv593mp1',
    aws_appsync_region: 'ap-south-1',
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    apiDomain: 'https://i12topgc2m.execute-api.ap-south-1.amazonaws.com/dev',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
