export default {
    data() {
        return {
            brokercompany: {
                tblforma3BD1fields: {
                    head: [
                        { key: 'title1',headerTitle: 'С ведения о дебиторской и кредиторской задолженности №', label: 'С ведения о дебиторской и кредиторской задолженности №' },
                        { key: 'title2',headerTitle: 'Наименование показателя', label: 'Наименование показателя' },
                        {
                            key: 'title3',
                            headerTitle: 'До 1 месяца',
                            label: 'До 1 месяца'
                        },
                        {
                            key: 'title4',
                            label: '1-3 месяца'
                        },      
                        {
                            key: 'title5',
                            label: '3-6 месяцев'
                        },
                        {
                            key: 'title6',
                            label: '6-12 месяцев'
                        },
                        {
                            key: 'title7',
                            label: 'Свыше 12 месяцев'
                        },
                        {
                            key: 'title8',
                            label: 'Итого'
                        }
                    ],
                    forma3BD1: [
                        {title1: '',title2: '',title3: '',title4: '',title5: '',title6: '',title7: '',title8: ''}
                    ]
                    // body: [
                    //     { title0: 1, title1: "Дебиторская задолженность всего:", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 2, title1: "в том числе: - пролонгированная;", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 3, title1: "- просроченная", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 4, title1: "Дебиторская задолженность контрагентов по договорам купли-продажи ценных бумаг, заключенным организацией от своего имени и за свой счет", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 5, title1: "Дебиторская задолженность клиентов всего:", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 6, title1: "в том числе по договорам с физическими лицами", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 7, title1: "Кредиторская задолженность всего:", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 8, title1: "в том числе: - пролонгированная;", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 9, title1: "- просроченная", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 10, title1: "Кредиторская задолженность перед контрагентами по договорам купли-продажи ценных бумаг, заключенным организацией от своего имени и за свой счет", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 11, title1: "Кредиторская задолженность перед клиентами", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    //     { title0: 12, title1: "в том числе по договорам с физическими лицами", title2: '', title3: '', title4: "", title5: "", title6: "", title7: "" },
                    // ]
                }
            }
            
        }
    }
}