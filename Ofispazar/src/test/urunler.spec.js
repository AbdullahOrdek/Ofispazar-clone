import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex"
import urunler from "../components/urunler.vue";
describe("Ürünler Listesi", () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const mockFunction = jest.fn();
    const products = [{ "id": 1, "urunAdi": "Fotokopi Kiralama /1 Ay - Yazıcı -Tarayıcı- Faks- A3 -Network", "urunAciklama": "Utax", "fiyat": 589, "image": "https://i.hizliresim.com/hhpqxfp.jpg" },
    { "id": 2, "urunAdi": "Kyocera M3645DN Fotokopi Yazıcı Tarayıcı Faks", "urunAciklama": "Kyocera", "fiyat": 14884, "image": "https://i.hizliresim.com/fte3dku.jpg" },
    { "id": 3, "urunAdi": "Fotokopi Kiralama /1 Ay - Yazıcı -Tarayıcı- Faks- A4 -Network", "urunAciklama": "Utax", "fiyat": 399, "image": "https://i.hizliresim.com/przaxcq.jpg" },
    ];
    const fetchProducts = () => {
        return new Promise(resolve => {
            resolve(products)
        })
    };
    const wrapper = mount(urunler, {
        stubs: ["router-link"],
        localVue,
        store: new Vuex.Store({
            actions: {
                fetchProducts: fetchProducts
            },
        })
    })

    describe("Liste Kontrolü", () => {
        it("Fotokopi Kiralama /1 Ay - Yazıcı -Tarayıcı- Faks- A3 -Network :", () => {
            expect(wrapper.text()).toContain("Fotokopi Kiralama /1 Ay - Yazıcı -Tarayıcı- Faks- A3 -Network");
        });
        it("Ürün 2'nin açıklaması : Kyocera :", () => {
            expect(wrapper.text()).toContain("Kyocera");
        });

        it("Ürün 3'ün fiyatı : 399", () => {
            expect(wrapper.text()).toContain("399");
        });
        test("Snapshot Testi", () => {
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    test('fetchProducts Fonsiyonu Ürün listesini çözümler', () => {
        return expect(fetchProducts()).resolves.toBe(products);
    });
})