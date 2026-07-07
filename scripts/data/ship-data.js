export class ShipData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const field = foundry.data.fields;
        return {
            classe: new fields.StringField({ required: true, initial: "Goletta" }),
            scafo: new fields.SchemaField({
                value: new fields.NumberField({ integer: true, initial: 0}),
                max: new fields.NumberField({ integer: true, initial: 0})
            }),
            vela: new fields.SchemaField({
                value: new fields.NumberField({ integer: true, initial: 0}),
                max: new fields.NumberField({ integer: true, initial: 0})
            }),
            timone: new fields.SchemaField({
                orologio: new fields.NumberField({ integer: true, initial: 0}),
                soglia: new fields.NumberField({ integer: true, initial: 0})
            }),
            pesoMax: new fields.NumberField({ initial: 0})
        };
    }
}