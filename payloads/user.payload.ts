export class UserPayload {
    private static readonly DEFAULT_PASSWORD = 'secret_sauce'
    private static readonly INVALID_PASSWORD = 'wrong_password'

    static standardUser() {
        return {
            username: 'standard_user',
            password: this.DEFAULT_PASSWORD,
        }
    }

    static lockedOutUser() {
        return {
            username: 'locked_out_user',
            password: this.DEFAULT_PASSWORD,
        }
    }

    static problemUser() {
        return {
            username: 'problem_user',
            password: this.DEFAULT_PASSWORD,
        }
    }

    static performanceGlitchUser() {
        return {
            username: 'performance_glitch_user',
            password: this.DEFAULT_PASSWORD,
        }
    }

    static errorUser() {
        return {
            username: 'error_user',
            password: this.DEFAULT_PASSWORD,
        }
    }

    static visualUser() {
        return {
            username: 'visual_user',
            password: this.DEFAULT_PASSWORD,
        }
    }

    static invalidUsername() {
        return {
            username: 'user_invalid',
            password: this.DEFAULT_PASSWORD,
        }
    }

    static invalidPassword() {
        return {
            username: 'standard_user',
            password: this.INVALID_PASSWORD,
        }
    }

    static invalidCredentials() {
        return {
            username: 'wrong_user',
            password: this.INVALID_PASSWORD,
        }
    }

    static validUsers() {
        return [
            {
                testName: 'standard user',
                ...this.standardUser(),
            },
            {
                testName: 'performance glitch user',
                ...this.performanceGlitchUser(),
            },
        ]
    }

    static invalidUsers() {
        return [
            {
                testName: 'invalid username',
                ...this.invalidUsername(),
            },
            {
                testName: 'invalid password',
                ...this.invalidPassword(),
            },
            {
                testName: 'invalid credentials',
                ...this.invalidCredentials(),
            },
        ]
    }
}
