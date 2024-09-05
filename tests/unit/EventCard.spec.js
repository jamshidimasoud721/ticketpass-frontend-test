import { mount } from '@vue/test-utils';
import EventCard from '@/components/EventCard.vue';
import { RouterLinkStub } from '@vue/test-utils';

describe('EventCard.vue', () => {
    const event = {
        id: 1,
        title: "Jazz Festival",
        start: "2024-09-02T10:00:00Z",
        end: "2024-09-02T11:30:00Z",
        description: "<p><strong>Immerse yourself in the soulful sounds of jazz</strong> at our annual Jazz Festival.</p><p>Discover new favorites and enjoy live performances from renowned musicians.</p>",
        image: "images/1.webp"
    };

    const wrapper = mount(EventCard, {
        props: { event },
        global: {
            stubs: {
                RouterLink: RouterLinkStub
            }
        }
    });

    it('renders event details', () => {
        expect(wrapper.find('h3').text()).toBe('Jazz Festival');
        expect(wrapper.find('img').attributes('src')).toBe('images/1.webp');
        expect(wrapper.find('p').text()).toContain('02/09/2024');
    });

    it('links to the event details page', () => {
        const link = wrapper.findComponent(RouterLinkStub);
        expect(link.props().to).toEqual({ name: 'eventDetail', params: { id: 1 } });
    });
});
