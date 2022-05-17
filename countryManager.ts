import {seagame} from "./Country";

export class CountryManager {
    list: seagame[] = [];

    add(data: seagame) {
        this.list.push(data)
    }

    swap(arr, a, b) {
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp;

    }

    countrySort() {
        for (let i = 0; i < this.list.length; i++) {
            for (let j = 0; j < this.list.length - 1 - i; j++) {
                if (this.list[j].gold < this.list[j + 1].gold) {
                    this.swap(this.list, j, j + 1)

                } else if (this.list[j].gold === this.list[j + 1].gold) {
                    if (this.list[j].silver < this.list[j + 1].silver) {
                        this.swap(this.list, j, j + 1)

                    } else if (this.list[j].silver === this.list[j + 1].silver) {
                        if (this.list[j].copper < this.list[j + 1].copper) {
                            this.swap(this.list, j, j + 1)

                        } else if (this.list[j].copper === this.list[j + 1].copper) {
                            if (this.list[j].country.localeCompare(this.list[j + 1].country) === 1) {
                                this.swap(this.list, j, j + 1)
                            }
                        }
                    }
                }
            }

        }
        return this.list;
    }
}

