// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { execSync } from 'child_process';

export function installRuntimeDependencies() {
    console.log('installing runtime dependencies...');
    execSync('yarn install --prod --ignore-engines --frozen-lockfile', {
        stdio: 'inherit',
        cwd: __dirname,
    });
}
