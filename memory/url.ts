import params from '../support/executionParams';

const brand = {
  farmprogress: 'farmprogress.com'
};
const env = {
  staging: 'staging',
  prod: '',
  preview: 'preview'
}

const webUrl: string = `https://${env[params.TEST_ENV as keyof typeof env]}.${brand[params.TEST_BRAND as keyof typeof brand]}/`;
export default {
  baseUrl: webUrl,
  api: {
    generateApiKey: `${webUrl}/api/iam/v1/users/me/api-key`,
  },
};
