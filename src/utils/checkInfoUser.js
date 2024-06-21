import Cookies from "js-cookie";
import axios from "axios";
import { ref } from "vue";

export const userData = ref(null);

export const fetchUserData = async (router) => {
    try {
        const sessionUuid = Cookies.get('sessionUuid'); // Получаем sessionUuid из куки

        if (!sessionUuid) {
            console.log('Session UUID not found');
            router.push({ name: 'home' });
            return;
        }

        const response = await axios.post('/getMe', {
            sessionUuid: sessionUuid,
        });

        console.log('Response data:', response.data);

        if (response.data.error) {
            console.log('Not authenticated');
            router.push({ name: 'home' });
        } else {
            userData.value = response.data.user;
            console.log('User data loaded:', response.data.user);
            // Проверка текущего маршрута перед перенаправлением
            if (router.currentRoute.value.name !== 'account') {
                router.push({ name: 'account' });
            }
        }
    } catch (error) {
        console.log('Error fetching user data:', error);
    }
};
