class Counter {
    constructor() {
      this.value = 0;
      this.intervalId = null;
      this.autoIncrementing = false;

      this.toggleButton = document.getElementById('toggleButton');
      this.incrementButton = document.getElementById('incrementButton');
      this.decrementButton = document.getElementById('decrementButton');
      this.counterValue = document.getElementById('counterValue');

      this.toggleButton.addEventListener('click', this.toggle.bind(this));
      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }

    startInterval() {
      this.intervalId = setInterval(() => {
        this.value++;
        this.updateDisplay();
      }, 1000);
    }

    stopInterval() {
      clearInterval(this.intervalId);
    }

    toggle() {
      if (this.autoIncrementing) {
        this.stopInterval();
        this.toggleButton.textContent = 'Start';
      } else {
        this.startInterval();
        this.toggleButton.textContent = 'Stop';
      }

      this.autoIncrementing = !this.autoIncrementing;
    }

    increment() {
      this.stopInterval();
      this.value++;
      this.updateDisplay();
      this.autoIncrementing = false;
    }

    decrement() {
      this.stopInterval();
      this.value--;
      this.updateDisplay();
      this.autoIncrementing = false;
    }

    updateDisplay() {
      this.counterValue.textContent = this.value;
    }
  }

  const counter = new Counter();