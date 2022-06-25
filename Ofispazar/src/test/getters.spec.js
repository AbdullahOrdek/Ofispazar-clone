import store from '../store'
describe('getProductWithId', () => {
    it('id si belirtilen ürünü getirme', () => {
        // mock state
        const state = {
            products: [
                { "id": 1, "urunAdi": "Fotokopi Kiralama /1 Ay - Yazıcı -Tarayıcı- Faks- A3 -Network", "urunAciklama": "Utax", "fiyat": 589, "image": "https://i.hizliresim.com/hhpqxfp.jpg" },
        { "id": 2, "urunAdi": "Kyocera M3645DN Fotokopi Yazıcı Tarayıcı Faks", "urunAciklama": "Kyocera", "fiyat": 14884, "image": "https://i.hizliresim.com/fte3dku.jpg" },
        { "id": 3, "urunAdi": "Fotokopi Kiralama /1 Ay - Yazıcı -Tarayıcı- Faks- A4 -Network", "urunAciklama": "Utax", "fiyat": 399, "image": "https://i.hizliresim.com/przaxcq.jpg" },
        { "id": 4, "urunAdi": "HP COLOR LASERJET MFP E87640 FOTOKOPI YAZICI TARAYICI MAKİNASI", "urunAciklama": "HP", "fiyat": 53431, "image": "https://i.hizliresim.com/5uk76uc.jpg" },
        { "id": 5, "urunAdi": "Samsung SL-K3300 Çok İşlevli Lazer Yazıcı", "urunAciklama": "Samsung", "fiyat": 26999, "image": "https://i.hizliresim.com/f0g0ke1.jpg" },
        { "id": 6, "urunAdi": "Brother DCP-1623WE. A4 Siyah Beyaz Fotokopi Yazıcı Tarayıcı Makina", "urunAciklama": "Brother", "fiyat": 3465, "image": "https://i.hizliresim.com/bxg0gzk.jpg" },
        { "id": 7, "urunAdi": "Konica Minolta A3 Renkli Fotokopi Kiralama/ Yazıcı Tarayıcı", "urunAciklama": "KONICA MINOLTA", "fiyat": 1999, "image": "https://i.hizliresim.com/sx71b85.jpg" },
        { "id": 8, "urunAdi": "CANON MF237W Yazıcı,Fotokopi,Faks,Tarayıcı", "urunAciklama": "Canon", "fiyat": 4999, "image": "https://i.hizliresim.com/ob5j0aj.jpg" },
        { "id": 9, "urunAdi": "HP G3Q39A LASERJET M106w YAZICI", "urunAciklama": "HP", "fiyat": 3172, "image": "https://i.hizliresim.com/3kh336i.jpg" },
        { "id": 10, "urunAdi": "Kyocera FS-1125MFP Fotokopi Yazıcı Tarayıcı -Dubleks S/B", "urunAciklama": "Kyocera", "fiyat": 5000, "image": "https://i.hizliresim.com/5n513yt.jpg" }
            ]
        }
        store.state.products = state.products;
        // mock getter
        const id = 5

        // get the result from the getter
        const result = store.getters.getProductWithID(id)
        const expected = { "id": 5, "urunAdi": "Samsung SL-K3300 Çok İşlevli Lazer Yazıcı", "urunAciklama": "Samsung", "fiyat": 26999, "image": "https://i.hizliresim.com/f0g0ke1.jpg" };

        // assert the result
        expect(result).toEqual(expected)
    })
})