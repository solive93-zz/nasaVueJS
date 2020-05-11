import { shallowMount } from "@vue/test-utils"
import Search from "@/components/Search"


//shallowMount sólo monta el componente que estamos utilizando
test('Renders a Found Images message', () => {
    const component = shallowMount(Search)

    expect(component.text()).toContain("Found Images(0)")
})

test('Renders a Found Images message the provided value', async () => {
    const component = shallowMount(Search)
    const currentNumberOfImages = 32

    component.setData({
        numberOfImages: currentNumberOfImages
    })

    await component.vm.$nextTick

    expect(component.text()).toContain("Found Images("+currentNumberOfImages+")")
})