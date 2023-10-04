import secureEnv from 'secure-env-ts';
import * as process from 'process';

export default class SecretVariables {
    /**
     * Decrypts and sets environment variables from .env.enc to node process.env
     */
    static init(): void {
        if (!process.env.CI && !process.env.SECRET)
            throw new Error('Cannot decrypt encrypted data. Please set password as a value of SECRET environment variable.');
        console.log('process.env.SECRET', process.env.SECRET)
        const decrypted = secureEnv({inputFile: '.env.enc', secret: process.env.SECRET as string});
        console.log('decrypted', decrypted)
        Object.assign(process.env, decrypted);
    }
}