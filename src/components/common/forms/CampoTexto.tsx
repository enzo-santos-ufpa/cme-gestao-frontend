import React from "react";
import Forms from "../../../models/form";
import ReactInputMask from "react-input-mask";

type PropsComponenteCampo = { className?: string, style?: React.CSSProperties };

type PropsCampo<T extends string> = {
    campo: Forms.Campo,
    onChanged: () => void,
    flex?: number,
    estilo?: Record<"campo" | T, PropsComponenteCampo | undefined>,
};

export type PropsCampoTexto = PropsCampo<"nome" | "divisor" | "caixaTexto" | "erro">;

export class CampoTexto extends React.Component<PropsCampoTexto, {}> {
    render() {
        const campo = this.props.campo;
        return <label {...this.props.estilo?.campo}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <p {...this.props.estilo?.nome}>{campo.nome}</p>
                <div {...this.props.estilo?.divisor}/>
                <ReactInputMask
                    mask={campo.mask == null ? [/.*/] : campo.mask}
                    value={campo.texto}
                    {...this.props.estilo?.caixaTexto}
                    onChange={(e) => {
                        campo.consome(e);
                        this.props.onChanged();
                    }}/>
            </div>
            <p {...this.props.estilo?.erro}>{campo.erro}</p>
        </label>;
    }
}

type PropsCampoMultiplaEscolha = PropsCampo<"nome">;

export class CampoMultiplaEscolha extends React.Component<PropsCampoMultiplaEscolha, {}> {
    render() {
        return undefined;
    }
}
