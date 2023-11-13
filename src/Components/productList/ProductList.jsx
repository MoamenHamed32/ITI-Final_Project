import "./ProductList.css";

import { useEffect, useState } from "react";

import ProductCardCols from "./../productCardCols/ProductCardCols";

let data = [
  {
    name: "Logitech Z200",
    rating: 4,
    rating_count: 70,
    price: 205.53,
    configuration: "2.0",
    total_wattage: "0 W",
    frequency_response: "20 Hz - 20 kHz",
    color: null,
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/044e21f178b0ad10f69fbc76b6ac013e.256p.jpg",
    id: 21,
    category: "speaker",
    discount_percentage: 5,
    state: "new",
    owner: "pcpartpicker",
    title: "Logitech Z200 10 W Speakers",
    "thumb-images":
      "//cdna.pcpartpicker.com/static/forever/images/product/044e21f178b0ad10f69fbc76b6ac013e.256p.jpg",
    specifications: {
      manufacturer: "Logitech",
      model: "Z200",
      "Power (Front, Each)": "5 W",
      features: [
        "Rich stereo sound: Two 2; 5-&quot;drivers per speaker pump out 10 watts peak power for clear stereo sound with added deep bass",
        "Use with multiple devices: Plug in two devices at the same time, like your smartphone plus tablet or laptop, via a 3; 5mm audio input plus auxiliary line",
        "Fingertip controls: On-speaker volume, power and bass controls for quick and easy audio adjustments",
        "Handy headphone jack: Listen to music, movies and games in total privacy",
        "High-quality acoustics: Tested and tuned at Logitech&#x27;s state-of-the art audio labs",
      ],
    },
  },
  {
    name: "Creative Labs Pebble 2.0",
    rating: 4,
    rating_count: 13,
    price: 207.67,
    configuration: "2.0",
    total_wattage: "4.4 W",
    frequency_response: "100 Hz - 17 kHz",
    color: "White",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/a02af64b3b2cf5af614179a132aa367c.256p.jpg",
    id: 22,
    category: "speaker",
    discount_percentage: 40,
    state: "new",
    owner: "pcpartpicker",
    title: "Creative Labs Pebble 2.0 4.4 W Speakers",
    "thumb-images":
      "//cdna.pcpartpicker.com/static/forever/images/product/a02af64b3b2cf5af614179a132aa367c.256p.jpg",
    specifications: {
      manufacturer: "Creative Labs",
      model: "Pebble 2.0",
      "Power (Front, Each)": "2.2 W",
    },
  },
  {
    name: "Asus ROG Strix",
    rating: 3,
    rating_count: 2,
    price: 1562.57,
    form_factor: "ATX",
    efficiency_rating: "80+ Gold",
    wattage: "850 W",
    modular: "Full",
    color: "White",
    image: "https://m.media-amazon.com/images/I/41E5-YifLvL.jpg",
    id: 26,
    category: "power supply",
    discount_percentage: 20,
    state: "new",
    owner: "pcpartpicker",
    title:
      "Asus ROG Strix 850 W 80+ Gold Certified Fully Modular ATX Power Supply",
    "thumb-images": [
      "https://m.media-amazon.com/images/I/41E5-YifLvL.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/19cf9b2fdda8760cb9d0f4119e780b9a.256p.jpg",
    ],
    specifications: {
      manufacturer: "Asus",
      model: "ROG Strix",
      Length: "160 mm",
    },
  },
  {
    name: "MSI MPG A650GF",
    rating: 5,
    rating_count: 4,
    price: 662.81,
    form_factor: "ATX",
    efficiency_rating: "80+ Gold",
    wattage: "650 W",
    modular: "Full",
    color: "Black",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/69c7679bbfccb706c80f41b452d36f54.256p.jpg",
    id: 27,
    category: "power supply",
    discount_percentage: 25,
    state: "new",
    owner: "pcpartpicker",
    title:
      "MSI MPG A650GF 650 W 80+ Gold Certified Fully Modular ATX Power Supply",
    "thumb-images": [
      "//cdna.pcpartpicker.com/static/forever/images/product/69c7679bbfccb706c80f41b452d36f54.256p.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/304c409dc991a5bc733316ceac29f77e.256p.jpg",
    ],
    specifications: {
      manufacturer: "MSI",
      model: "MPG A650GF",
      Length: "160 mm",
    },
  },
  {
    name: "Logitech G502 LIGHTSPEED",
    rating: 4,
    rating_count: 28,
    price: 986.86,
    tracking_method: "Optical",
    connection_type: "Wireless",
    maximum_dpi: "25600",
    hand_orientation: "Right",
    color: "Black",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/688ab5cb5e71622cfe889c082d784cdb.256p.jpg",
    id: 6,
    category: "mouse",
    discount_percentage: 30,
    state: "new",
    owner: "pcpartpicker",
    title: "Logitech G502 LIGHTSPEED Wireless Optical Mouse",
    "thumb-images":
      "//cdna.pcpartpicker.com/static/forever/images/product/688ab5cb5e71622cfe889c082d784cdb.256p.jpg",
    manufacturer: "Logitech",
    model: "G502 LIGHTSPEED",
  },
  {
    name: "Corsair HARPOON RGB PRO",
    rating: 4,
    rating_count: 15,
    price: 238.43,
    tracking_method: "Optical",
    connection_type: "Wired",
    maximum_dpi: "12000",
    hand_orientation: "Right",
    color: "Black",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/4ca5b63fecc2a7fc4094c9da2c127ac8.256p.jpg",
    id: 7,
    category: "mouse",
    discount_percentage: 15,
    state: "new",
    owner: "pcpartpicker",
    title: "Corsair HARPOON RGB PRO Wired Optical Mouse",
    "thumb-images": [
      "//cdna.pcpartpicker.com/static/forever/images/product/4ca5b63fecc2a7fc4094c9da2c127ac8.256p.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/ff538ab3c87f9cede5b9b1fd9bdbf37e.256p.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/4a448b55650be1dc22bcdfbd679844d2.256p.jpg",
    ],
    manufacturer: "Corsair",
    model: "HARPOON RGB PRO",
  },
  {
    name: "Asus TUF GAMING X570-PLUS (WI-FI)",
    rating: 4,
    rating_count: 207,
    price: 1587.25,
    socket: "AM4",
    form_factor: "ATX",
    memory_max: "128 GB",
    memory_slots: "4",
    color: "Black / Gold",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/8d7d0435e8a2af93b5d91a1a5dccd476.256p.jpg",
    id: 31,
    category: "motherboard",
    discount_percentage: 19,
    state: "new",
    owner: "pcpartpicker",
    title: "Asus TUF GAMING X570\u002DPLUS (WI\u002DFI) ATX AM4 Motherboard",
    "thumb-images": [
      "//cdna.pcpartpicker.com/static/forever/images/product/8d7d0435e8a2af93b5d91a1a5dccd476.256p.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/5803a025f18d08a2943e807aa8073ab5.256p.jpg",
      "https://m.media-amazon.com/images/I/41bH-ULDkUL.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/cfcc8f81e756080252885c26ab92e2a9.256p.jpg",
    ],
    specifications: {
      manufacturer: "Asus",
      model: "TUF GAMING X570-PLUS",
      Chipset: "AMD X570",
    },
  },
  {
    name: "MSI B450 TOMAHAWK MAX",
    rating: 4,
    rating_count: 216,
    price: 822.04,
    socket: "AM4",
    form_factor: "ATX",
    memory_max: "64 GB",
    memory_slots: "4",
    color: "Black",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/0a8a0ca77620c63b68fec6323537d50a.256p.jpg",
    id: 32,
    category: "motherboard",
    discount_percentage: 0,
    state: "new",
    owner: "pcpartpicker",
    title: "MSI B450 TOMAHAWK MAX ATX AM4 Motherboard",
    "thumb-images": [
      "//cdna.pcpartpicker.com/static/forever/images/product/0a8a0ca77620c63b68fec6323537d50a.256p.jpg",
      "https://images-eu.ssl-images-amazon.com/images/I/51yFDX7--aL.jpg",
      "https://images-eu.ssl-images-amazon.com/images/I/51zH-pBzPZL.jpg",
      "https://images-eu.ssl-images-amazon.com/images/I/41Kxx%2BnBtCL.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/1332de2507376821ea0a6fe655a401bc.256p.jpg",
    ],
    specifications: {
      manufacturer: "MSI",
      model: "B450 TOMAHAWK MAX",
      Chipset: "AMD B450",
    },
  },
  {
    name: "Asus ROG Swift PG65UQ",
    rating: 0,
    rating_count: 0,
    price: 98855.78,
    screen_size: '64.5"',
    resolution: "3840 x 2160",
    refresh_rate: "144 Hz",
    "response_time_(g2g)": "4 ms",
    panel_type: "VA",
    aspect_ratio: "16:9",
    image: "https://m.media-amazon.com/images/I/51pZL0YMf9L.jpg",
    id: 16,
    category: "monitor",
    discount_percentage: 19,
    state: "new",
    owner: "pcpartpicker",
    title: "Asus ROG Swift PG65UQ 64.5\u0022 3840 x 2160 144 Hz Monitor",
    "thumb-images": "https://m.media-amazon.com/images/I/51pZL0YMf9L.jpg",
    specifications: {
      manufacturer: "Asus",
      model: "ROG Swift PG65UQ",
      Widescreen: "Yes",
      "Built-in Speakers": "Yes",
      "Viewing Angle": "178° H x 178° V",
      Inputs: ["4 x HDMI", "1 x DisplayPort"],
    },
  },
  {
    name: "Samsung Odyssey G9",
    rating: 4,
    rating_count: 4,
    price: 16170.35,
    screen_size: '49.0"',
    resolution: "5120 x 1440",
    refresh_rate: "240 Hz",
    "response_time_(g2g)": "1 ms",
    panel_type: "VA",
    aspect_ratio: "32:9",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/1c3449001f4d13277a4b39a59ddf68f7.256p.jpg",
    id: 17,
    category: "monitor",
    discount_percentage: 7,
    state: "new",
    owner: "pcpartpicker",
    title: "Samsung Odyssey G9 49.0\u0022 5120 x 1440 240 Hz Curved Monitor",
    "thumb-images":
      "//cdna.pcpartpicker.com/static/forever/images/product/1c3449001f4d13277a4b39a59ddf68f7.256p.jpg",
    specifications: {
      manufacturer: "Samsung",
      model: "Odyssey G9",
      Widescreen: "Yes",
      "Built-in Speakers": "No",
      "Viewing Angle": "178° H x 178° V",
      Inputs: ["1 x HDMI", "2 x DisplayPort"],
    },
  },
  {
    name: "Corsair Vengeance LPX 16 GB",
    rating: 4,
    rating_count: 338,
    price: 731.9,
    speed: "DDR4-3200",
    modules: "2 x 8GB",
    "price_/_gb": "$5.562",
    color: "Black / Yellow",
    first_word_latency: "10 ns",
    cas_latency: "16",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/835ab3efad1be13bbe53beef3e3c6f96.256p.jpg",
    id: 36,
    category: "memory",
    discount_percentage: 8,
    state: "new",
    owner: "pcpartpicker",
    title: "Corsair Vengeance LPX 16 GB (2 x 8 GB) DDR4\u002D3200 CL16 Memory",
    "thumb-images": [
      "//cdna.pcpartpicker.com/static/forever/images/product/835ab3efad1be13bbe53beef3e3c6f96.256p.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/fee3ba4d684ea643cc72a1c38f0dbc2f.256p.jpg",
      "//cdna.pcpartpicker.com/static/forever/images/product/fee3ba4d684ea643cc72a1c38f0dbc2f.256p.jpg",
    ],
    specifications: {
      manufacturer: "Corsair",
      model: "Vengeance LPX",
      Voltage: "1.35 V",
      "ECC / Registered": "Non-ECC / Unbuffered",
    },
  },
  {
    name: "Team T-FORCE VULCAN Z 16 GB",
    rating: 4,
    rating_count: 57,
    price: 657.8,
    speed: "DDR4-3200",
    modules: "2 x 8GB",
    "price_/_gb": "$4.999",
    color: "Black",
    first_word_latency: "10 ns",
    cas_latency: "16",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/96753a64597c28e46bf80ef7064b214b.256p.jpg",
    id: 37,
    category: "memory",
    discount_percentage: 15,
    state: "new",
    owner: "pcpartpicker",
    title:
      "TEAMGROUP T\u002DForce Vulcan Z 16 GB (2 x 8 GB) DDR4\u002D3200 CL16 Memory",
    "thumb-images":
      "//cdna.pcpartpicker.com/static/forever/images/product/96753a64597c28e46bf80ef7064b214b.256p.jpg",
    specifications: {
      manufacturer: "TEAMGROUP6",
      model: "T-FORCE VULCAN",
      Voltage: "1.35 V",
      "ECC / Registered": "Non-ECC / Unbuffered",
    },
  },
  {
    name: "Redragon K552",
    rating: 4,
    rating_count: 62,
    price: 246.65,
    style: "Gaming",
    switch_type: "Outemu Blue",
    backlit: "Red",
    tenkeyless: true,
    connection_type: "Wired",
    color: "Black",
    image: "https://m.media-amazon.com/images/I/41LA45NiUmL.jpg",
    id: 11,
    category: "keyboard",
    discount_percentage: 8,
    state: "new",
    owner: "pcpartpicker",
    title: "Redragon K552 Wired Gaming Keyboard",
    "thumb-images": [
      "https://m.media-amazon.com/images/I/41LA45NiUmL.jpg",
      "https://m.media-amazon.com/images/I/41Yqo5YSjzL.jpg",
      "https://m.media-amazon.com/images/I/41iehTkmqdL.jpg",
      "https://m.media-amazon.com/images/I/413FzinBWRL.jpg",
      "https://m.media-amazon.com/images/I/41Ll1f8Zf4L.jpg",
      "https://m.media-amazon.com/images/I/41+IaGo+t3L.jpg",
    ],
    manufacturer: "Redragon",
    model: "K552",
    normal_Keys: 87,
  },
  {
    name: "AMD Athlon 200GE",
    rating: 4,
    rating_count: 14,
    price: 863.49,
    core_count: "2",
    core_clock: "3.2 GHz",
    boost_clock: null,
    tdp: "35 W",
    integrated_graphics: "Radeon Vega 3",
    smt: true,
    socket: "AM4",
    image:
      "//cdna.pcpartpicker.com/static/forever/images/product/f55fe8a2443698085e9d8d2997cc3173.256p.jpg",
    id: 46,
    category: "CPU",
    discount_percentage: 5,
    state: "new",
    owner: "pcpartpicker",
    title: "AMD Athlon 200GE 3.2 GHz Dual\u002DCore Processor",
    "thumb-images":
      "//cdna.pcpartpicker.com/static/forever/images/product/f55fe8a2443698085e9d8d2997cc3173.256p.jpg",
    specifications: {
      manufacturer: "AMD",
      model: "200GE",
      Includes_Cooler: "yes",
      "simultaneous-multithreading": "yes",
    },
  },
];

export default function ProductList({ filterData }) {
  const [products, setProducts] = useState(data);

  const productsList = products.map((product) => {
    return (
      <ProductCardCols className="card " product={product} key={product.id} />
    );
  });

  useEffect(() => {
    if (filterData !== "" && filterData !== "All") {
      const filteredProducts = data.filter(
        (product) => product.category.toLowerCase() === filterData.toLowerCase()
      );
      setProducts(filteredProducts);
    } else if (filterData == "All") {
      setProducts(data);
    }
  }, [filterData]);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productsList}
    </div>
  );
}
