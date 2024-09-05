import { mount } from '@vue/test-utils';
import EventList from '@/views/EventList.vue';
import EventCard from '@/components/EventCard.vue';

describe('EventList.vue', () => {
    const wrapper = mount(EventList);

    it('renders correctly with events', () => {
        const cards = wrapper.findAllComponents(EventCard);
        expect(cards).toHaveLength(8);
    });

    it('handles pagination correctly', async () => {
        await wrapper.vm.nextPage();
        expect(wrapper.vm.currentPage).toBe(2);

        await wrapper.vm.prevPage();
        expect(wrapper.vm.currentPage).toBe(1);
    });
});
