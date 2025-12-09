import LayoutController from './LayoutController'
import SettingsController from './SettingsController'
import ContactController from './ContactController'
import PortfolioController from './PortfolioController'
import ServicePageController from './ServicePageController'
import Settings from './Settings'

const Controllers = {
    LayoutController: Object.assign(LayoutController, LayoutController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    ContactController: Object.assign(ContactController, ContactController),
    PortfolioController: Object.assign(PortfolioController, PortfolioController),
    ServicePageController: Object.assign(ServicePageController, ServicePageController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers