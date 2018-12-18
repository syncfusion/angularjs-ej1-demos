﻿syncApp.controller('LocalizationCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.rdlReportPath = 'ConditionalRowFormatting.rdl';
    $scope.Locale = 'en-US';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };

    $scope.init = function () {
        ej.ReportViewer.Locale["ja-JP"] = {
            toolbar: {
                print: {
                    headerText: '印刷',
                    contentText: '印刷'
                },
                exportformat: {
                    headerText: '輸出',
                    contentText: 'エクスポートされたファイル形式を選択します。',
                    Pdf: 'PDF',
                    Excel: 'エクセル',
                    Word: '単語',
                    Html: 'Html'
                },
                first: {
                    headerText: '最初の',
                    contentText: 'レポートの最初のページに移動します。'
                },
                previous: {
                    headerText: '前の',
                    contentText: 'レポートの前のページに移動します。'
                },
                next: {
                    headerText: '次の',
                    contentText: 'レポートの次のページに移動します。'
                },
                last: {
                    headerText: '最後の',
                    contentText: 'レポートの最後のページに移動します。'
                },
                documentMap: {
                    headerText: 'ドキュメントマップ',
                    contentText: '表示または見出しマップを非表示にする。'
                },
                parameter: {
                    headerText: 'パラメーター',
                    contentText: '表示またはパラメータペインを非表示にします。'
                },
                zoomIn: {
                    headerText: 'ズーム•イン',
                    contentText: 'レポートに拡大します。'
                },
                zoomOut: {
                    headerText: 'ズームアウト',
                    contentText: 'レポートのズームアウト。'
                },
                refresh: {
                    headerText: 'リフレッシュ',
                    contentText: 'レポートを更新します。'
                },
                printLayout: {
                    headerText: 'プレビュー',
                    contentText: '印刷レイアウトモードと通常モードとの間で変更します。'
                },
                pageIndex: {
                    headerText: 'ページ番号',
                    contentText: '現在のページ番号が表示されます。'
                },
                zoom: {
                    headerText: 'ズーム',
                    contentText: 'レポート上のズームインまたはズームアウト。'
                },
                back: {
                    headerText: 'バック',
                    contentText: 'バック親レポートに戻ります。'
                },
                fittopage: {
                    headerText: 'ページに合わせる',
                    contentText: 'コンテナにレポートページを取り付けます。',
                    pageWidth: 'ページ幅',
                    pageHeight: 'ページ全体'
                },
                pagesetup: {
                    headerText: 'ページ設定',
                    contentText: '用紙サイズ、向きや余白を変更するには、ページ設定オプションを選択します。'
                }
            },
            pagesetupDialog: {
                paperSize: '用紙サイズ',
                height: '高さ',
                width: '幅',
                margins: '余白',
                top: '上',
                bottom: 'ボトム',
                right: '右',
                left: '左',
                unit: 'に',
                orientation: 'オリエンテーション',
                portrait: '肖像画',
                landscape: '風景',
                doneButton: '終わりました',
                cancelButton: 'キャンセル'
            },
            viewButton: 'レポートの表示。'
        };

        ej.ReportViewer.Locale["fr-FR"] = {
            toolbar: {
                print: {
                    headerText: 'Imprimer',
                    contentText: 'Imprimer.'
                },
                exportformat: {
                    headerText: 'exportation',
                    contentText: 'Sélectionnez le format de fichier exporté.',
                    Pdf: 'PDF',
                    Excel: 'exceller',
                    Word: 'mot',
                    Html: 'Html'
                },
                first: {
                    headerText: 'première',
                    contentText: 'Aller à la première page du rapport.'
                },
                previous: {
                    headerText: 'précédent',
                    contentText: 'Aller à la page précédente du rapport.'
                },
                next: {
                    headerText: 'suivant',
                    contentText: 'Aller à la page suivante du rapport.'
                },
                last: {
                    headerText: 'dernier',
                    contentText: 'Aller à la dernière page du rapport.'
                },
                documentMap: {
                    headerText: 'document de Plan',
                    contentText: 'Afficher ou masquer la carte du document.'
                },
                parameter: {
                    headerText: 'paramètre',
                    contentText: 'Afficher ou masquer le volet des paramètres.'
                },
                zoomIn: {
                    headerText: 'Agrandir',
                    contentText: 'Zoom dans le rapport.'
                },
                zoomOut: {
                    headerText: 'Dézoomer',
                    contentText: 'Zoom sur le rapport.'
                },
                refresh: {
                    headerText: 'rafraîchir',
                    contentText: 'Actualiser le rapport.'
                },
                printLayout: {
                    headerText: 'avant-première',
                    contentText: 'Changer entre mise en page et les modes normaux.'
                },
                pageIndex: {
                    headerText: 'Nombre de page',
                    contentText: 'Numéro de page pour voir.'
                },
                zoom: {
                    headerText: 'zoom',
                    contentText: 'Zoom avant ou arrière sur le rapport.'
                },
                back: {
                    headerText: 'arrière',
                    contentText: 'Retour à létat parent.'
                },
                fittopage: {
                    headerText: 'adapter à la page',
                    contentText: 'Monter la page du rapport au conteneur.',
                    pageWidth: 'Largeur de page',
                    pageHeight: 'page entière'
                },
                pagesetup: {
                    headerText: 'Mise en page',
                    contentText: "Choisir la page option de configuration pour modifier le format du papier, l'orientation et les marges."
                }
            },
            pagesetupDialog: {
                paperSize: 'Format papier',
                height: 'la taille',
                width: 'Largeur',
                margins: 'marges',
                top: 'Haut',
                bottom: 'Bas',
                right: 'Droite',
                left: 'À gauche',
                unit: 'dans',
                orientation: 'orientation',
                portrait: 'Portrait',
                landscape: 'paysage',
                doneButton: 'Terminé',
                cancelButton: 'Annuler'
            },
            viewButton: 'Voir Rapport'
        };
    }
});

function onChange(args) {
    var reportObject = $("#container").data("ejReportViewer");
    reportObject.setModel({ locale: args.text });
}