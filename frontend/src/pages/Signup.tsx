import { Auth } from "../components/Auth"
import { Thoughts } from "../components/thoughts"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signup" />
            </div>
            <div className="hidden lg:block">
                <Thoughts />
            </div>
        </div>
    </div>
}