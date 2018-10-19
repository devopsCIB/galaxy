export class UserPreferences {
    preferences: {
        notify_survey: boolean;
        notify_import_fail: boolean;
        notify_import_success: boolean;
        notify_content_release: boolean;
        notify_author_release: boolean;
        notify_galaxy_announce: boolean;
    };

    namespaces_followed: any;
    repositories_followed: any;
}
