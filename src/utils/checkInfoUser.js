import Cookies from "js-cookie";
import axios from "axios";
import { ref } from "vue";

export const userData = ref(null);

export const fetchUserData = async (router) => {
    try {
        const sessionUuid = Cookies.get('sessionUuid');

        if (!sessionUuid) {
            router.push({ name: 'home' });
            return;
        }

        const response = await axios.post('/getMe', { sessionUuid });

        if (response.data.error) {
            Cookies.remove('sessionUuid');
            router.push({ name: 'home' });
        } else {
            userData.value = response.data.user;
            if (router.currentRoute.value.name !== 'account') {
                router.push({ name: 'account' });
            }
        }
    } catch (error) {
        console.log('Error fetching user data:', error);
    }
};
