import LayoutController from './LayoutController'
import SettingsController from './SettingsController'
import ContactController from './ContactController'
import Settings from './Settings'

const Controllers = {
    LayoutController: Object.assign(LayoutController, LayoutController),
    SettingsController: Object.assign(SettingsController, SettingsController),
    ContactController: Object.assign(ContactController, ContactController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers