import { test, expect } from "./baseFixtures";
import { LoginPage } from '../pages/loginPage';
import { LogsPage } from '../pages/logsPage.js';
import { IngestionPage } from '../pages/ingestionPage';


test.describe("Join for logs", () => {
    let loginPage, logsPage, ingestionPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        ingestionPage = new IngestionPage(page);
        logsPage = new LogsPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login();
        await ingestionPage.ingestion();
        await ingestionPage.ingestionJoin();
    });

    test("Run query after selecting two streams", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });

    test("Run query after selecting two streams and SQL Mode On", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.enableSQLMode();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });

    test("Run query after selecting two streams, selecting field and SQL Mode On", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.kubernetesContainerName();
        await logsPage.enableSQLMode();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });

    test("Run query after selecting two streams, SQL Mode On and entering join queries", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.kubernetesContainerNameJoin();
        await logsPage.enableSQLMode();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });

    test("Run query after selecting two streams, SQL Mode On and entering join limit", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.kubernetesContainerNameJoinLimit();
        await logsPage.enableSQLMode();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });

    test("Run query after selecting two streams, SQL Mode On and entering join like", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.kubernetesContainerNameJoinLike();
        await logsPage.enableSQLMode();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });

    test("Run query after selecting two streams, SQL Mode On and entering Left join queries", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.kubernetesContainerNameLeftJoin();
        await logsPage.enableSQLMode();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });

    test("Run query after selecting two streams, SQL Mode On and entering Right join queries", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.kubernetesContainerNameRightJoin();
        await logsPage.enableSQLMode();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });

    test("Run query after selecting two streams, SQL Mode On and entering Full join queries", async ({ page }) => {

        await logsPage.navigateToLogs();
        await logsPage.selectIndexAndStreamJoin();
        await logsPage.kubernetesContainerNameFullJoin();
        await logsPage.enableSQLMode();
        await logsPage.selectRunQuery();
        await logsPage.signOut();

    });
});