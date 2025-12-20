import LayoutController from './LayoutController'
import SettingsController from './SettingsController'
import ContactController from './ContactController'
import PortfolioController from './PortfolioController'
import ServicePageController from './ServicePageController'
import UserPageController from './UserPageController'
import ClientAssignController from './ClientAssignController'
import SitemapController from './SitemapController'

const Controllers = {
    LayoutController: Object.assign(LayoutController, LayoutController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    ContactController: Object.assign(ContactController, ContactController),
    PortfolioController: Object.assign(PortfolioController, PortfolioController),
    ServicePageController: Object.assign(ServicePageController, ServicePageController),
    UserPageController: Object.assign(UserPageController, UserPageController),
    ClientAssignController: Object.assign(ClientAssignController, ClientAssignController),
    SitemapController: Object.assign(SitemapController, SitemapController),
}

export default Controllers