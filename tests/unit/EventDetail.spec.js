import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import EventDetail from '@/views/EventDetail.vue';
import eventData from '@/assets/data/events-data.json';

describe('EventDetail.vue', () => {
    const router = createRouter({
        history: createMemoryHistory(),
        routes: [{ path: '/event/:id', component: EventDetail }]
    });

    const event = eventData[0];

    beforeAll(async () => {
        router.push(`/event/${event.id}`);
        await router.isReady();
    });

    it('renders event details correctly', async () => {
        const wrapper = mount(EventDetail, {
            global: {
                plugins: [router]
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.find('h1').text()).toBe(event.title);
        expect(wrapper.find('img').attributes('src')).toBe(event.image);
    });
});
