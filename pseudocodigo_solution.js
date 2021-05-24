/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-return-assign */
class RegisteredUser {
  constructor(services = []) {
    this.services = services
  }

  getTotal() {
    let total = 0

    this.services.forEach((service) => (total += service.getServiceFee()))

    return total
  }
}

class MultimediaContent {
  getAdditionalCharges() {
    return 0.0
  }
}

class PremiumContent extends MultimediaContent {
  constructor(additionalFee) {
    super();
    this.additionalFee = additionalFee
  }

  getAdditionalCharges() {
    return this.additionalFee;
  }
}

class Service {
  
  constructor() {
    this.content = MultimediaContent content
  }

  getSpecificPrice() {}

  getServiceFee() {
    return this.getSpecificPrice() + this.content.getAdditionalCharges();
  }
}

class StreamingService extends Service {
  getSpecificPrice() {
    return content.streamingPrice;
  }
}

class DownloadService extends Service {
  getSpecificPrice() {
    return content.downloadPrice;
  }
}