import Component  from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
  constructor() {
    super(...arguments);
    this.loadWeather();
  }

  @tracked temperature;
  @tracked city;

  async loadWeather() {
    const zip = this.args.zip || '10014';

    const response = await fetch(`/weather/${zip}.json`);
    const { temperature, city } = await response.json();

    this.temperature = temperature;
    this.city = city;
  }
}
